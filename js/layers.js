addLayer("0layer small", {// Add a * small* to generate a slightly different layer
    name: "sideLayer0",
    position: -1,
    row: 0,
    symbol() {return (options.ch || modInfo.languageMod==false) ? '[ ??? ]' : '[ Normal Universe ]'},
    symbolEN() {return (options.ch || modInfo.languageMod==false) ? '[ ??? ]' : '[ Normal Universe ]'},
    nodeStyle: {"font-size": "15px", "text-center": "center", "height": "30px"},
    startData() { return {
        unlocked: true,
        small: true,
        points: new Decimal(0),// This actually does nothing, but you have to write this. (Unless you want add something in this layer. #Todo, might change that later.)
    }},
    color: "#fefefe",
    type: "none",
    tooltip(){return false},
    layerShown(){return layerDisplayTotal(['rank'])},// If any layer in the array is unlocked, it will returns true. Otherwise it will return false.
	tabFormat: [
        ["display-text", function() { return getPointsDisplay() }]
    ],
})
addLayer("rank", {
    name: "rank", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "Rank", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolEN: "Rank", // The second name of this appears on the layer's node ( If you open otherLanguageMod )
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
	    rmult: new Decimal(1),
    }},
    color: "#84e600",
    requires: new Decimal(100), // Can be a function that takes requirement increases into account
    resource: "Rank", // Name of prestige currency
    resourceEN: "Rank", // The second name of prestige currency ( If you open otherLanguageMod )
    baseResource: "points", // Name of resource prestige is based on
    baseResourceEN: "points", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1).mul(player.rank.points.root(4).add(1))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	autoPrestige() {return hasUpgrade("tier", 11)},
	passiveGeneration() {
		let g = new Decimal(0);
		if (hasUpgrade("rank", 11)) g = new Decimal(1).mul(player.rank.points.root(4)).mul(player.pent.points.root(2)).add(1).mul(player.tetr.points.root(3).add(1)).mul(5);
		if (hasUpgrade("pent", 12)) g = new Decimal(1).mul(player.rank.points.root(4)).mul(player.pent.points.root(2)).add(1).mul(player.tetr.points.root(3).add(1));
		if (hasUpgrade("tetr", 11)) g = new Decimal(1).mul(player.rank.points.root(4)).mul(player.pent.points.root(2)).add(1);
		return g.mul(player.rank.rmult);
	},
	canReset() {
		return true;
	},
	resetsNothing() {
		if (hasUpgrade("tetr", 12)) return true;
		return false;
	},
	buyables: {
		rows: 1,
		cols: 3,
		11:{
			title(){
				return "<h3>more rank gain!!!</h3>";
			},
			titleEN(){
				return "<h3>more rank gain!!!</h3>";
			},
			display(){
				let data = tmp[this.layer].buyables[this.id];
				return "Level: "+format(player[this.layer].buyables[this.id])+"<br>"+
				"You gain "+format(data.effect)+"x more ranks<br>"+
				"Cost for the next level: Rank "+format(data.cost);
			},
			displayEN(){
				let data = tmp[this.layer].buyables[this.id];
				return "Level: "+format(player[this.layer].buyables[this.id])+"<br>"+
				"You gain "+format(data.effect)+"x more ranks<br>"+
				"Cost for the next level: Rank "+format(data.cost);
			},
			cost(){
				let a=player[this.layer].buyables[this.id];
                let cost = new Decimal(1)
				a=Decimal.pow(3,a);
				return cost.mul(Decimal.mul(1e8,a));
			},
			canAfford() {
                   return player[this.layer].points.gte(tmp[this.layer].buyables[this.id].cost)
			},
               buy() { 
                   player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
               },
			  effect(){
				  player.rank.rmult = player.rank.rmult.mul(1.6);
				  return player.rank.rmult;
			  },
			  unlocked(){
				  return true;
			  },
			  style() {
				if (player.rank.points.lt(this.cost())) return {
					'border-radius': '0%',
					'color':'white',
					'background-color':'black',
					'border':'2px solid',
					'height':'100px'
				}
				else return {
					'border-radius': '0%',
					'color':'white',
					'background-color':'rgb(25, 70, 12)',
					'border':'2px solid',
					'height':'100px'
				}
			  }, 
		},
	},
	upgrades: {
        	rows: 5,
        	cols: 5,
		11: {
			title: "Rank upgrade 11",
			titleEN: "Rank upgrade 11",
            		description: "Point gain is better + 5x Rank generation",
            		descriptionEN: "Point gain is better + 5x Rank generation",
            		cost: new Decimal(1000000),
            		unlocked() { return true},
		},
		12: {
			title: "Rank upgrade 12",
			titleEN: "Rank upgrade 12",
            		description: "10x Rank generation",
            		descriptionEN: "10x Rank generation",
            		cost: new Decimal(10000000),
            		unlocked() { return true},
		},
	 },
    layerShown(){return true},
})
addLayer("tier", {
    name: "tier", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "Tier", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolEN: "Tier", // The second name of this appears on the layer's node ( If you open otherLanguageMod )
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#e6c900",
    requires: new Decimal(12), // Can be a function that takes requirement increases into account
    resource: "Tier", // Name of prestige currency
    resourceEN: "Tier", // The second name of prestige currency ( If you open otherLanguageMod )
    baseResource: "Rank", // Name of resource prestige is based on
    baseResourceEN: "Rank", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.rank.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	upgrades: {
        	rows: 5,
        	cols: 5,
		11: {
			title: "Tier upgrade 11",
			titleEN: "Tier upgrade 11",
            		description: "You can now automatically Rank up",
            		descriptionEN: "You can now automatically Rank up",
            		cost: new Decimal(1),
            		unlocked() { return true},
		},
		12: {
			title: "Tier upgrade 12",
			titleEN: "Tier upgrade 12",
            		description: "You can now Tetr up!",
            		descriptionEN: "You can now Tetr up!",
            		cost: new Decimal(5),
            		unlocked() { return true},
		},
		13: {
			title: "Tier upgrade 13",
			titleEN: "Tier upgrade 13",
            		description: "You can now Tetr up!",
            		descriptionEN: "You can now Tetr up!",
            		cost: new Decimal(50),
            		unlocked() { return true},
		},
	},
	passiveGeneration() {
		if (hasUpgrade("pent", 13)) return new Decimal(1).mul(player.tier.points.root(5)).add(1).mul(player.tetr.points.root(5).add(1));
		if (hasUpgrade("tetr", 12)) return new Decimal(1).mul(player.tier.points.root(5)).add(1);
		return new Decimal(0);
	},
	autoPrestige() {return hasUpgrade("tetr", 11)},
	canReset() { return true },
	resetsNothing() {
		if (hasUpgrade("pent", 13)) return true;
		return false;
	},
    layerShown(){return true},
})
addLayer("tetr", {
    name: "tetr", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "Tetr", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolEN: "Tetr", // The second name of this appears on the layer's node ( If you open otherLanguageMod )
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#e66d00",
    requires: new Decimal(10).mul(new Decimal(1.2).pow(2)).floor(), // Can be a function that takes requirement increases into account
    resource: "Tetr", // Name of prestige currency
    resourceEN: "Tetr", // The second name of prestige currency ( If you open otherLanguageMod )
    baseResource: "Tier", // Name of resource prestige is based on
    baseResourceEN: "Tier", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.tier.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.7, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	upgrades: {
        	rows: 5,
        	cols: 5,
		11: {
			title: "Tetr upgrade 11",
			titleEN: "Tetr upgrade 11",
            		description: "You can now automatically Tier up",
            		descriptionEN: "You can now automatically Tier up",
            		cost: new Decimal(1),
            		unlocked() { return true},
		},
		12: {
			title: "Tetr upgrade 12",
			titleEN: "Tetr upgrade 12",
            		description: "You can now passively generate Tiers",
            		descriptionEN: "You can now passively generate Tiers",
            		cost: new Decimal(10),
            		unlocked() { return true},
		},
		13: {
			title: "Tetr upgrade 13",
			titleEN: "Tetr upgrade 13",
            		description: "You can now Rebirth",
            		descriptionEN: "You can now Rebirth",
            		cost: new Decimal(20),
            		unlocked() { return true},
		},
		21: {
			title: "Tetr upgrade 21",
			titleEN: "Tetr upgrade 21",
            		description: "You can now passively generate Rebirths",
            		descriptionEN: "You can now passively generate Rebirths",
            		cost: new Decimal(1000),
            		unlocked() { return true},
		},
		22: {
			title: "Tetr upgrade 22",
			titleEN: "Tetr upgrade 22",
            		description: "You can now automatically Rebirth",
            		descriptionEN: "You can now automatically Rebirth",
            		cost: new Decimal(4999),
            		unlocked() { return true},
		},
	},
	canReset() { return true },
    layerShown(){return hasUpgrade("tier", 12) || true},
})
addLayer("pent", {
    name: "pent", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "Pent", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolEN: "Pent", // The second name of this appears on the layer's node ( If you open otherLanguageMod )
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#cc3800",
    requires: new Decimal(10).mul(new Decimal(1.2).pow(3)).floor(), // Can be a function that takes requirement increases into account
    resource: "Pent", // Name of prestige currency
    resourceEN: "Pent", // The second name of prestige currency ( If you open otherLanguageMod )
    baseResource: "Tetr", // Name of resource prestige is based on
    baseResourceEN: "Tetr", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.tetr.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.7, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 4, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	upgrades: {
        	rows: 5,
        	cols: 5,
		11: {
			title: "Pent upgrade 11",
			titleEN: "Pent upgrade 11",
            		description: "You can now automatically Tetr up",
            		descriptionEN: "You can now automatically Tetr up",
            		cost: new Decimal(1),
            		unlocked() { return true},
		},
		12: {
			title: "Pent upgrade 12",
			titleEN: "Pent upgrade 12",
            		description: "Rank generation is better",
            		descriptionEN: "Rank generation is better",
            		cost: new Decimal(5),
            		unlocked() { return true},
		},
		13: {
			title: "Pent upgrade 13",
			titleEN: "Pent upgrade 13",
            		description: "Tier generation is better",
            		descriptionEN: "Tier generation is better",
            		cost: new Decimal(10),
            		unlocked() { return true},
		},
		21: {
			title: "Pent upgrade 21",
			titleEN: "Pent upgrade 21",
            		description: "Tetr boosts itself",
            		descriptionEN: "Tetr boosts itself",
            		cost: new Decimal(40),
            		unlocked() { return true},
		},
		22: {
			title: "Pent upgrade 22",
			titleEN: "Pent upgrade 22",
            		description: "You can now passively generate Pent",
            		descriptionEN: "You can now passively generate Pent",
            		cost: new Decimal(100),
            		unlocked() { return true},
		},
	},
	canReset() { return true },
    layerShown(){return hasUpgrade("tier", 12) || true},
})
addLayer("1layer small", {// Add a * small* to generate a slightly different layer
    name: "sideLayer1",
    position: -1,
    row: 6,
    symbol() {return (options.ch || modInfo.languageMod==false) ? '[ ??? ]' : '[ Beyond-Ranks ]'},
    symbolEN() {return (options.ch || modInfo.languageMod==false) ? '[ ??? ]' : '[ Beyond-Ranks ]'},
    nodeStyle: {"font-size": "15px", "text-center": "center", "height": "30px"},
    startData() { return {
        unlocked: true,
        small: true,
        points: new Decimal(0),// This actually does nothing, but you have to write this. (Unless you want add something in this layer. #Todo, might change that later.)
    }},
    color: "#fefefe",
    type: "none",
    tooltip(){return false},
    layerShown(){return true/*layerDisplayTotal(['beyondRank'])*/},// If any layer in the array is unlocked, it will returns true. Otherwise it will return false.
	tabFormat: [
        ["display-text", function() { return getPointsDisplay() }]
    ],
})

addLayer("2layer small", {// Add a * small* to generate a slightly different layer
    name: "sideLayer2",
    position: -1,
    row: 8,
    symbol() {return (options.ch || modInfo.languageMod==false) ? '[ ??? ]' : '[ Rebirths ]'},
    symbolEN() {return (options.ch || modInfo.languageMod==false) ? '[ ??? ]' : '[ Rebirths ]'},
    nodeStyle: {"font-size": "15px", "text-center": "center", "height": "30px"},
    startData() { return {
        unlocked: true,
        small: true,
        points: new Decimal(0),// This actually does nothing, but you have to write this. (Unless you want add something in this layer. #Todo, might change that later.)
    }},
    color: "#fefefe",
    type: "none",
    tooltip(){return false},
    layerShown(){return true/*layerDisplayTotal(['rebirth'])*/},// If any layer in the array is unlocked, it will returns true. Otherwise it will return false.
	tabFormat: [
        ["display-text", function() { return getPointsDisplay() }]
    ],
})
addLayer("rebirth", {
    name: "rebirth", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "Rebirth", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolEN: "Rebirth", // The second name of this appears on the layer's node ( If you open otherLanguageMod )
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#64c3ff",
    requires: new Decimal(1e15), // Can be a function that takes requirement increases into account
    resource: "Rebirths", // Name of prestige currency
    resourceEN: "Rebirths", // The second name of prestige currency ( If you open otherLanguageMod )
    baseResource: "points", // Name of resource prestige is based on
    baseResourceEN: "points", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 9, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	autoPrestige() {return hasUpgrade("tetr", 21)},
	passiveGeneration() {
		if (hasUpgrade("tetr", 20)) return new Decimal(1).mul(player.rebirth.points.root(6)).mul(player.tetr.points.root(4)).add(1);
		return new Decimal(0);
	},
	canReset() {
		return true;
	},
	resetsNothing() {
		if (hasUpgrade("tetr", 12)) return true;
		return false;
	},
    layerShown(){return hasUpgrade("tetr", 13) || true},
})

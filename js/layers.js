addLayer("0layer small", {// Add a * small* to generate a slightly different layer
    name: "sideLayer0",
    position: -1,
    row: 0,
    symbol() {return (options.ch || modInfo.languageMod==false) ? '[ ??? ]' : '[ Universe ]'},
    symbolEN() {return (options.ch || modInfo.languageMod==false) ? '[ ??? ]' : '[ Universe ]'},
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
    symbol: "rank", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolEN: "rank", // The second name of this appears on the layer's node ( If you open otherLanguageMod )
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
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
        mult = new Decimal(1)
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
		if (hasUpgrade("tetr", 11)) return new Decimal(1).mul(player.rank.points.log10());
		return new Decimal(0);
	},
	canReset() { return true },
    layerShown(){return true},
})
addLayer("tier", {
    name: "tier", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "tier", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolEN: "tier", // The second name of this appears on the layer's node ( If you open otherLanguageMod )
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
			style: {
				"width": "120px",
				"height": "100px"
			},
		},
		12: {
			title: "Tier upgrade 12",
			titleEN: "Tier upgrade 12",
            		description: "You can now Tetr up!",
            		descriptionEN: "You can now Tetr up!",
            		cost: new Decimal(5),
            		unlocked() { return true},
			style: {
				"width": "120px",
				"height": "100px"
			},
		},
	},
	canReset() { return true },
    layerShown(){return true},
})
addLayer("tetr", {
    name: "tetr", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "tetr", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolEN: "tetr", // The second name of this appears on the layer's node ( If you open otherLanguageMod )
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
			style: {
				"width": "120px",
				"height": "100px"
			},
		},
	},
	canReset() { return true },
    layerShown(){return hasUpgrade("tier", 12)},
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

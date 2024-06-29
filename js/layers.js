addLayer("0layer small", {// Add a * small* to generate a slightly different layer
    name: "sideLayer0",
    position: -1,
    row: 0,
    symbol() {return (options.ch || modInfo.languageMod==false) ? '↓ 层级 0 ↓' : '↓ layer 0 ↓'},
    symbolEN() {return (options.ch || modInfo.languageMod==false) ? '↓ 层级 0 ↓' : '↓ layer 0 ↓'},
    nodeStyle: {"font-size": "15px", "text-center": "center", "height": "30px"},
    startData() { return {
        unlocked: true,
        small: true,
        points: new Decimal(0),// This actually does nothing, but you have to write this. (Unless you want add something in this layer. #Todo, might change that later.)
    }},
    color: "#fefefe",
    type: "none",
    tooltip(){return false},
    layerShown(){return layerDisplayTotal(['super'])},// If any layer in the array is unlocked, it will returns true. Otherwise it will return false.
	tabFormat: [
        ["display-text", function() { return getPointsDisplay() }]
    ],
})
addLayer("super", {
    name: "super-points", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "super-points", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolEN: "super-points", // The second name of this appears on the layer's node ( If you open otherLanguageMod )
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FFFFFF",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "super-points", // Name of prestige currency
    resourceEN: "super-points", // The second name of prestige currency ( If you open otherLanguageMod )
    baseResource: "points", // Name of resource prestige is based on
    baseResourceEN: "points", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.55, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1).mul(player.mega.points.div(1000000).add(1)).mul(player.ultra.points.div(1000000).add(1)).mul(player.hyper.points.div(1000000).add(1)).mul(player.demi.points.div(1000000).add(1)).mul(player.a.points.add(1)).mul(player.b.points.div(100000).add(1)).mul(player.c.points.div(10).add(1)).mul(player.d.points.div(10).add(1)).mul(player.e.points.div(10).add(1)).mul(player.f.points.div(10).add(1)).mul(player.g.points.div(10).add(1)).mul(player.h.points.div(10).add(1)).mul(player.i.points.div(10).add(1)).mul(player.j.points.div(10).add(1)).mul(player.k.points.div(10).add(1)).mul(player.l.points.div(10).add(1)).mul(player.m.points.div(10).add(1)).mul(player.n.points.div(10).add(1)).mul(player.o.points.div(10).add(1)).mul(player.p.points.div(10).add(1)).mul(player.q.points.div(10).add(1)).mul(player.r.points.div(10).add(1)).mul(player.s.points.div(10).add(1)).mul(player.t.points.div(10).add(1)).mul(player.u.points.div(10).add(1)).mul(player.v.points.div(10).add(1)).mul(player.w.points.div(10).add(1)).mul(player.x.points.div(10).add(1)).mul(player.y.points.div(10).add(1)).mul(player.z.points.div(10).add(1)).mul(player.a2.points.div(10).add(1))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	passiveGeneration() { return true },
    layerShown(){return true},
})
addLayer("mega", {
    name: "mega-points", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "mega-points", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolEN: "mega-points", // The second name of this appears on the layer's node ( If you open otherLanguageMod )
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FFCCCC",
    requires: new Decimal(100), // Can be a function that takes requirement increases into account
    resource: "mega-points", // Name of prestige currency
    resourceEN: "mega-points", // The second name of prestige currency ( If you open otherLanguageMod )
    baseResource: "super-points", // Name of resource prestige is based on
    baseResourceEN: "super-points", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.super.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.55, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1).mul(player.ultra.points.div(1000000).add(1)).mul(player.hyper.points.div(1000000).add(1)).mul(player.demi.points.div(1000000).add(1)).mul(player.a.points.add(1)).mul(player.b.points.div(10).add(1)).mul(player.c.points.div(10).add(1)).mul(player.d.points.div(10).add(1)).mul(player.e.points.div(10).add(1)).mul(player.f.points.div(10).add(1)).mul(player.g.points.div(10).add(1)).mul(player.h.points.div(10).add(1)).mul(player.i.points.div(10).add(1)).mul(player.j.points.div(10).add(1)).mul(player.k.points.div(10).add(1)).mul(player.l.points.div(10).add(1)).mul(player.m.points.div(10).add(1)).mul(player.n.points.div(10).add(1)).mul(player.o.points.div(10).add(1)).mul(player.p.points.div(10).add(1)).mul(player.q.points.div(10).add(1)).mul(player.r.points.div(10).add(1)).mul(player.s.points.div(10).add(1)).mul(player.t.points.div(10).add(1)).mul(player.u.points.div(10).add(1)).mul(player.v.points.div(10).add(1)).mul(player.w.points.div(10).add(1)).mul(player.x.points.div(10).add(1)).mul(player.y.points.div(10).add(1)).mul(player.z.points.div(10).add(1)).mul(player.a2.points.div(10).add(1))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	passiveGeneration() { return player.super.points.gte(100) },
    layerShown(){return true},
})
addLayer("ultra", {
    name: "ultra-points", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "ultra-points", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolEN: "ultra-points", // The second name of this appears on the layer's node ( If you open otherLanguageMod )
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FF9999",
    requires: new Decimal(1000), // Can be a function that takes requirement increases into account
    resource: "ultra-points", // Name of prestige currency
    resourceEN: "ultra-points", // The second name of prestige currency ( If you open otherLanguageMod )
    baseResource: "mega-points", // Name of resource prestige is based on
    baseResourceEN: "mega-points", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.mega.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.55, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1).mul(player.hyper.points.div(1000000).add(1)).mul(player.demi.points.div(1000000).add(1)).mul(player.a.points.add(1)).mul(player.b.points.div(10).add(1)).mul(player.c.points.div(10).add(1)).mul(player.d.points.div(10).add(1)).mul(player.e.points.div(10).add(1)).mul(player.f.points.div(10).add(1)).mul(player.g.points.div(10).add(1)).mul(player.h.points.div(10).add(1)).mul(player.i.points.div(10).add(1)).mul(player.j.points.div(10).add(1)).mul(player.k.points.div(10).add(1)).mul(player.l.points.div(10).add(1)).mul(player.m.points.div(10).add(1)).mul(player.n.points.div(10).add(1)).mul(player.o.points.div(10).add(1)).mul(player.p.points.div(10).add(1)).mul(player.q.points.div(10).add(1)).mul(player.r.points.div(10).add(1)).mul(player.s.points.div(10).add(1)).mul(player.t.points.div(10).add(1)).mul(player.u.points.div(10).add(1)).mul(player.v.points.div(10).add(1)).mul(player.w.points.div(10).add(1)).mul(player.x.points.div(10).add(1)).mul(player.y.points.div(10).add(1)).mul(player.z.points.div(10).add(1)).mul(player.a2.points.div(10).add(1))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	passiveGeneration() { return player.mega.points.gte(1000) },
    layerShown(){return true},
})
addLayer("hyper", {
    name: "hyper-points", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "hyper-points", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolEN: "hyper-points", // The second name of this appears on the layer's node ( If you open otherLanguageMod )
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FF6666",
    requires: new Decimal(10000), // Can be a function that takes requirement increases into account
    resource: "hyper-points", // Name of prestige currency
    resourceEN: "hyper-points", // The second name of prestige currency ( If you open otherLanguageMod )
    baseResource: "ultra-points", // Name of resource prestige is based on
    baseResourceEN: "ultra-points", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.ultra.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.55, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1).mul(player.demi.points.div(1000000).add(1)).mul(player.a.points.add(1)).mul(player.b.points.div(10).add(1)).mul(player.c.points.div(10).add(1)).mul(player.d.points.div(10).add(1)).mul(player.e.points.div(10).add(1)).mul(player.f.points.div(10).add(1)).mul(player.g.points.div(10).add(1)).mul(player.h.points.div(10).add(1)).mul(player.i.points.div(10).add(1)).mul(player.j.points.div(10).add(1)).mul(player.k.points.div(10).add(1)).mul(player.l.points.div(10).add(1)).mul(player.m.points.div(10).add(1)).mul(player.n.points.div(10).add(1)).mul(player.o.points.div(10).add(1)).mul(player.p.points.div(10).add(1)).mul(player.q.points.div(10).add(1)).mul(player.r.points.div(10).add(1)).mul(player.s.points.div(10).add(1)).mul(player.t.points.div(10).add(1)).mul(player.u.points.div(10).add(1)).mul(player.v.points.div(10).add(1)).mul(player.w.points.div(10).add(1)).mul(player.x.points.div(10).add(1)).mul(player.y.points.div(10).add(1)).mul(player.z.points.div(10).add(1)).mul(player.a2.points.div(10).add(1))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 4, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	passiveGeneration() { return player.ultra.points.gte(10000) },
    layerShown(){return true},
})
addLayer("demi", {
    name: "demi-points", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "demi-points", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolEN: "demi-points", // The second name of this appears on the layer's node ( If you open otherLanguageMod )
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FF3333",
    requires: new Decimal(100000), // Can be a function that takes requirement increases into account
    resource: "demi-points", // Name of prestige currency
    resourceEN: "demi-points", // The second name of prestige currency ( If you open otherLanguageMod )
    baseResource: "hyper-points", // Name of resource prestige is based on
    baseResourceEN: "hyper-points", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.hyper.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.55, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1).mul(player.a.points.add(1)).mul(player.b.points.div(10).add(1)).mul(player.c.points.div(10).add(1)).mul(player.d.points.div(10).add(1)).mul(player.e.points.div(10).add(1)).mul(player.f.points.div(10).add(1)).mul(player.g.points.div(10).add(1)).mul(player.h.points.div(10).add(1)).mul(player.i.points.div(10).add(1)).mul(player.j.points.div(10).add(1)).mul(player.k.points.div(10).add(1)).mul(player.l.points.div(10).add(1)).mul(player.m.points.div(10).add(1)).mul(player.n.points.div(10).add(1)).mul(player.o.points.div(10).add(1)).mul(player.p.points.div(10).add(1)).mul(player.q.points.div(10).add(1)).mul(player.r.points.div(10).add(1)).mul(player.s.points.div(10).add(1)).mul(player.t.points.div(10).add(1)).mul(player.u.points.div(10).add(1)).mul(player.v.points.div(10).add(1)).mul(player.w.points.div(10).add(1)).mul(player.x.points.div(10).add(1)).mul(player.y.points.div(10).add(1)).mul(player.z.points.div(10).add(1)).mul(player.a2.points.div(10).add(1))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 5, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	passiveGeneration() { return player.hyper.points.gte(100000) },
    layerShown(){return true},
})
addLayer("1layer small", {// Add a * small* to generate a slightly different layer
    name: "sideLayer1",
    position: -1,
    row: 6,
    symbol() {return (options.ch || modInfo.languageMod==false) ? '↓ 层级 1 ↓' : '↓ layer 1 ↓'},
    symbolEN() {return (options.ch || modInfo.languageMod==false) ? '↓ 层级 1 ↓' : '↓ layer 1 ↓'},
    nodeStyle: {"font-size": "15px", "text-center": "center", "height": "30px"},
    startData() { return {
        unlocked: true,
        small: true,
        points: new Decimal(0),// This actually does nothing, but you have to write this. (Unless you want add something in this layer. #Todo, might change that later.)
    }},
    color: "#fefefe",
    type: "none",
    tooltip(){return false},
    layerShown(){return layerDisplayTotal(['a'])},// If any layer in the array is unlocked, it will returns true. Otherwise it will return false.
	tabFormat: [
        ["display-text", function() { return getPointsDisplay() }]
    ],
})

addLayer("a", {
    name: "a", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "a", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolEN: "a", // The second name of this appears on the layer's node ( If you open otherLanguageMod )
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FF0000",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "a", // Name of prestige currency
    resourceEN: "a", // The second name of prestige currency ( If you open otherLanguageMod )
    baseResource: "demi-points", // Name of resource prestige is based on
    baseResourceEN: "demi-points", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.demi.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.55, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
	    if (hasUpgrade("a", 11)) mult = mult.mul(new Decimal(2))
	    if (hasUpgrade("a", 12)) mult = mult.mul(new Decimal(3))
	    if (hasUpgrade("a", 13)) mult = mult.mul(new Decimal(5))
	    if (hasUpgrade("a", 14)) mult = mult.mul(new Decimal(10))
	    if (hasUpgrade("a", 15)) mult = mult.mul(new Decimal(20))
	    mult = mult.mul(player.b.points.div(10).add(1)).mul(player.c.points.div(10).add(1)).mul(player.d.points.div(10).add(1)).mul(player.e.points.div(10).add(1)).mul(player.f.points.div(10).add(1)).mul(player.g.points.div(10).add(1)).mul(player.h.points.div(10).add(1)).mul(player.i.points.div(10).add(1)).mul(player.j.points.div(10).add(1)).mul(player.k.points.div(10).add(1)).mul(player.l.points.div(10).add(1)).mul(player.m.points.div(10).add(1)).mul(player.n.points.div(10).add(1)).mul(player.o.points.div(10).add(1)).mul(player.p.points.div(10).add(1)).mul(player.q.points.div(10).add(1)).mul(player.r.points.div(10).add(1)).mul(player.s.points.div(10).add(1)).mul(player.t.points.div(10).add(1)).mul(player.u.points.div(10).add(1)).mul(player.v.points.div(10).add(1)).mul(player.w.points.div(10).add(1)).mul(player.x.points.div(10).add(1)).mul(player.y.points.div(10).add(1)).mul(player.z.points.div(10).add(1)).mul(player.a2.points.div(10).add(1))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 7, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	upgrades: {
		rows: 5,
		cols: 5,
		11: {
			title: "bla",
			titleEN: "bla",
			description: "x2a增益",
			descriptionEN: "x2 a gain",
			cost: new Decimal(10),
		},
		12: {
			title: "bla",
			titleEN: "bla",
			description: "x3a增益",
			descriptionEN: "x3 a gain",
			cost: new Decimal(100),
		},
		13: {
			title: "bla",
			titleEN: "bla",
			description: "x5a增益",
			descriptionEN: "x5 a gain",
			cost: new Decimal(1000),
		},
		14: {
			title: "bla",
			titleEN: "bla",
			description: "x10a增益",
			descriptionEN: "x10 a gain",
			cost: new Decimal(10000),
		},
		15: {
			title: "bla",
			titleEN: "bla",
			description: "x20a增益",
			descriptionEN: "x20 a gain",
			cost: new Decimal(100000),
		},
	},
	passiveGeneration() { return hasUpgrade("b", 11) },
	autoUpgrade() { return hasUpgrade("b", 12) },
    layerShown(){return true},
})
addLayer("b", {
    name: "b", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "b", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolEN: "b", // The second name of this appears on the layer's node ( If you open otherLanguageMod )
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FF1000",
    requires: new Decimal(1e10 * (1.1 ** 0)), // Can be a function that takes requirement increases into account
    resource: "b", // Name of prestige currency
    resourceEN: "b", // The second name of prestige currency ( If you open otherLanguageMod )
    baseResource: "a", // Name of resource prestige is based on
    baseResourceEN: "a", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.a.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 8, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	upgrades: {
		rows: 5,
		cols: 5,
		11: {
			title: "自動化",
			titleEN: "Automation",
			description: "自動化您的a",
			descriptionEN: "Automate your a",
			cost: new Decimal(10),
		},
		12: {
			title: "自動化",
			titleEN: "Automation",
			description: "自動購買a升級",
			descriptionEN: "Auto buy a upgrades",
			cost: new Decimal(100),
		},
	},
	passiveGeneration() { return player.c.points.gte(10) },
    layerShown(){return true},
})
addLayer("c", {
    name: "c", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "c", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolEN: "c", // The second name of this appears on the layer's node ( If you open otherLanguageMod )
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FF2000",
    requires: new Decimal(1e10 * (1.1 ** 1)), // Can be a function that takes requirement increases into account
    resource: "c", // Name of prestige currency
    resourceEN: "c", // The second name of prestige currency ( If you open otherLanguageMod )
    baseResource: "b", // Name of resource prestige is based on
    baseResourceEN: "b", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.b.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
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
	passiveGeneration() { return player.d.points.gte(10) },
    layerShown(){return true},
})
addLayer("d", {
    name: "d", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "d", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolEN: "d", // The second name of this appears on the layer's node ( If you open otherLanguageMod )
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FF3000",
    requires: new Decimal(1e10 * (1.1 ** 2)), // Can be a function that takes requirement increases into account
    resource: "d", // Name of prestige currency
    resourceEN: "d", // The second name of prestige currency ( If you open otherLanguageMod )
    baseResource: "c", // Name of resource prestige is based on
    baseResourceEN: "c", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.c.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 10, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	passiveGeneration() { return player.e.points.gte(10) },
    layerShown(){return true},
})
addLayer("e", {
    name: "e", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "e", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolEN: "e", // The second name of this appears on the layer's node ( If you open otherLanguageMod )
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FF4000",
    requires: new Decimal(1e10 * (1.1 ** 3)), // Can be a function that takes requirement increases into account
    resource: "e", // Name of prestige currency
    resourceEN: "e", // The second name of prestige currency ( If you open otherLanguageMod )
    baseResource: "d", // Name of resource prestige is based on
    baseResourceEN: "d", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.d.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.45, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 11, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	passiveGeneration() { return player.f.points.gte(10) },
    layerShown(){return true},
})
addLayer("f", {
    name: "f", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "f", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolEN: "f", // The second name of this appears on the layer's node ( If you open otherLanguageMod )
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FF5000",
    requires: new Decimal(1e10 * (1.1 ** 4)), // Can be a function that takes requirement increases into account
    resource: "f", // Name of prestige currency
    resourceEN: "f", // The second name of prestige currency ( If you open otherLanguageMod )
    baseResource: "e", // Name of resource prestige is based on
    baseResourceEN: "e", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.e.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.45, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 12, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	passiveGeneration() { return player.g.points.gte(10) },
    layerShown(){return true},
})
addLayer("g", {
    name: "g", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "g", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolEN: "g", // The second name of this appears on the layer's node ( If you open otherLanguageMod )
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FF6000",
    requires: new Decimal(1e10 * (1.1 ** 5)), // Can be a function that takes requirement increases into account
    resource: "g", // Name of prestige currency
    resourceEN: "g", // The second name of prestige currency ( If you open otherLanguageMod )
    baseResource: "f", // Name of resource prestige is based on
    baseResourceEN: "f", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.f.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.45, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 13, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	passiveGeneration() { return player.h.points.gte(10) },
    layerShown(){return true},
})
addLayer("h", {
    name: "h", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "h", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolEN: "h", // The second name of this appears on the layer's node ( If you open otherLanguageMod )
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FF7000",
    requires: new Decimal(1e10 * (1.1 ** 6)), // Can be a function that takes requirement increases into account
    resource: "h", // Name of prestige currency
    resourceEN: "h", // The second name of prestige currency ( If you open otherLanguageMod )
    baseResource: "g", // Name of resource prestige is based on
    baseResourceEN: "g", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.g.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.45, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 14, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	passiveGeneration() { return player.i.points.gte(10) },
    layerShown(){return true},
})
addLayer("i", {
    name: "i", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "i", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolEN: "i", // The second name of this appears on the layer's node ( If you open otherLanguageMod )
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FF8000",
    requires: new Decimal(1e10 * (1.1 ** 7)), // Can be a function that takes requirement increases into account
    resource: "i", // Name of prestige currency
    resourceEN: "i", // The second name of prestige currency ( If you open otherLanguageMod )
    baseResource: "h", // Name of resource prestige is based on
    baseResourceEN: "h", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.h.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.4, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 15, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	passiveGeneration() { return player.j.points.gte(10) },
    layerShown(){return true},
})
addLayer("j", {
    name: "j", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "j", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolEN: "j", // The second name of this appears on the layer's node ( If you open otherLanguageMod )
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FF9000",
    requires: new Decimal(1e10 * (1.1 ** 8)), // Can be a function that takes requirement increases into account
    resource: "j", // Name of prestige currency
    resourceEN: "j", // The second name of prestige currency ( If you open otherLanguageMod )
    baseResource: "i", // Name of resource prestige is based on
    baseResourceEN: "i", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.i.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.4, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 16, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	passiveGeneration() { return player.k.points.gte(10) },
    layerShown(){return true},
})
addLayer("k", {
    name: "k", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "k", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolEN: "k", // The second name of this appears on the layer's node ( If you open otherLanguageMod )
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FFA000",
    requires: new Decimal(1e10 * (1.1 ** 9)), // Can be a function that takes requirement increases into account
    resource: "k", // Name of prestige currency
    resourceEN: "k", // The second name of prestige currency ( If you open otherLanguageMod )
    baseResource: "j", // Name of resource prestige is based on
    baseResourceEN: "j", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.j.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.4, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 17, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	passiveGeneration() { return player.l.points.gte(10) },
    layerShown(){return true},
})
addLayer("l", {
    name: "l", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "l", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolEN: "l", // The second name of this appears on the layer's node ( If you open otherLanguageMod )
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FFB000",
    requires: new Decimal(1e10 * (1.1 ** 10)), // Can be a function that takes requirement increases into account
    resource: "l", // Name of prestige currency
    resourceEN: "l", // The second name of prestige currency ( If you open otherLanguageMod )
    baseResource: "k", // Name of resource prestige is based on
    baseResourceEN: "k", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.k.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.4, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 18, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	passiveGeneration() { return player.m.points.gte(10) },
    layerShown(){return true},
})
addLayer("m", {
    name: "m", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "m", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolEN: "m", // The second name of this appears on the layer's node ( If you open otherLanguageMod )
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FFC000",
    requires: new Decimal(1e10 * (1.1 ** 11)), // Can be a function that takes requirement increases into account
    resource: "m", // Name of prestige currency
    resourceEN: "m", // The second name of prestige currency ( If you open otherLanguageMod )
    baseResource: "l", // Name of resource prestige is based on
    baseResourceEN: "l", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.l.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.4, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 19, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	passiveGeneration() { return player.n.points.gte(10) },
    layerShown(){return true},
})
addLayer("n", {
    name: "n", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "n", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolEN: "n", // The second name of this appears on the layer's node ( If you open otherLanguageMod )
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FFD000",
    requires: new Decimal(1e10 * (1.1 ** 12)), // Can be a function that takes requirement increases into account
    resource: "n", // Name of prestige currency
    resourceEN: "n", // The second name of prestige currency ( If you open otherLanguageMod )
    baseResource: "m", // Name of resource prestige is based on
    baseResourceEN: "m", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.m.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.4, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 20, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	passiveGeneration() { return player.o.points.gte(10) },
    layerShown(){return true},
})
addLayer("o", {
    name: "o", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "o", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolEN: "o", // The second name of this appears on the layer's node ( If you open otherLanguageMod )
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FFE000",
    requires: new Decimal(1e10 * (1.1 ** 13)), // Can be a function that takes requirement increases into account
    resource: "o", // Name of prestige currency
    resourceEN: "o", // The second name of prestige currency ( If you open otherLanguageMod )
    baseResource: "n", // Name of resource prestige is based on
    baseResourceEN: "n", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.n.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.35, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 21, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	passiveGeneration() { return player.p.points.gte(10) },
    layerShown(){return true},
})
addLayer("p", {
    name: "p", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "p", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolEN: "p", // The second name of this appears on the layer's node ( If you open otherLanguageMod )
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FFF000",
    requires: new Decimal(1e10 * (1.1 ** 14)), // Can be a function that takes requirement increases into account
    resource: "p", // Name of prestige currency
    resourceEN: "p", // The second name of prestige currency ( If you open otherLanguageMod )
    baseResource: "o", // Name of resource prestige is based on
    baseResourceEN: "o", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.o.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.35, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 22, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	passiveGeneration() { return player.q.points.gte(10) },
    layerShown(){return true},
})
addLayer("q", {
    name: "q", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "q", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolEN: "q", // The second name of this appears on the layer's node ( If you open otherLanguageMod )
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FFFF00",
    requires: new Decimal(1e10 * (1.1 ** 15)), // Can be a function that takes requirement increases into account
    resource: "q", // Name of prestige currency
    resourceEN: "q", // The second name of prestige currency ( If you open otherLanguageMod )
    baseResource: "p", // Name of resource prestige is based on
    baseResourceEN: "p", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.p.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.35, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 23, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	passiveGeneration() { return player.r.points.gte(10) },
    layerShown(){return true},
})
addLayer("r", {
    name: "r", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "r", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolEN: "r", // The second name of this appears on the layer's node ( If you open otherLanguageMod )
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#F0FF00",
    requires: new Decimal(1e10 * (1.1 ** 16)), // Can be a function that takes requirement increases into account
    resource: "r", // Name of prestige currency
    resourceEN: "r", // The second name of prestige currency ( If you open otherLanguageMod )
    baseResource: "q", // Name of resource prestige is based on
    baseResourceEN: "q", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.q.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.35, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 24, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	passiveGeneration() { return player.s.points.gte(10) },
    layerShown(){return true},
})
addLayer("s", {
    name: "s", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "s", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolEN: "s", // The second name of this appears on the layer's node ( If you open otherLanguageMod )
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#E0FF00",
    requires: new Decimal(1e10 * (1.1 ** 17)), // Can be a function that takes requirement increases into account
    resource: "s", // Name of prestige currency
    resourceEN: "s", // The second name of prestige currency ( If you open otherLanguageMod )
    baseResource: "r", // Name of resource prestige is based on
    baseResourceEN: "r", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.r.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.35, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 25, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	passiveGeneration() { return player.t.points.gte(10) },
    layerShown(){return true},
})
addLayer("t", {
    name: "t", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "t", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolEN: "t", // The second name of this appears on the layer's node ( If you open otherLanguageMod )
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#D0FF00",
    requires: new Decimal(1e10 * (1.1 ** 18)), // Can be a function that takes requirement increases into account
    resource: "t", // Name of prestige currency
    resourceEN: "t", // The second name of prestige currency ( If you open otherLanguageMod )
    baseResource: "s", // Name of resource prestige is based on
    baseResourceEN: "s", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.s.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.35, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 26, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	passiveGeneration() { return player.u.points.gte(10) },
    layerShown(){return true},
})
addLayer("u", {
    name: "u", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "u", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolEN: "u", // The second name of this appears on the layer's node ( If you open otherLanguageMod )
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#C0FF00",
    requires: new Decimal(1e10 * (1.1 ** 19)), // Can be a function that takes requirement increases into account
    resource: "u", // Name of prestige currency
    resourceEN: "u", // The second name of prestige currency ( If you open otherLanguageMod )
    baseResource: "t", // Name of resource prestige is based on
    baseResourceEN: "t", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.t.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.3, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 27, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	passiveGeneration() { return player.v.points.gte(10) },
    layerShown(){return true},
})
addLayer("v", {
    name: "v", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "v", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolEN: "v", // The second name of this appears on the layer's node ( If you open otherLanguageMod )
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#B0FF00",
    requires: new Decimal(1e10 * (1.1 ** 20)), // Can be a function that takes requirement increases into account
    resource: "v", // Name of prestige currency
    resourceEN: "v", // The second name of prestige currency ( If you open otherLanguageMod )
    baseResource: "u", // Name of resource prestige is based on
    baseResourceEN: "u", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.u.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.3, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 28, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	passiveGeneration() { return player.w.points.gte(10) },
    layerShown(){return true},
})
addLayer("w", {
    name: "w", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "w", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolEN: "w", // The second name of this appears on the layer's node ( If you open otherLanguageMod )
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#A0FF00",
    requires: new Decimal(1e10 * (1.1 ** 21)), // Can be a function that takes requirement increases into account
    resource: "w", // Name of prestige currency
    resourceEN: "w", // The second name of prestige currency ( If you open otherLanguageMod )
    baseResource: "v", // Name of resource prestige is based on
    baseResourceEN: "v", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.c.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.3, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 29, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	passiveGeneration() { return player.x.points.gte(10) },
    layerShown(){return true},
})
addLayer("x", {
    name: "x", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "x", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolEN: "x", // The second name of this appears on the layer's node ( If you open otherLanguageMod )
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#90FF00",
    requires: new Decimal(1e10 * (1.1 ** 22)), // Can be a function that takes requirement increases into account
    resource: "x", // Name of prestige currency
    resourceEN: "x", // The second name of prestige currency ( If you open otherLanguageMod )
    baseResource: "w", // Name of resource prestige is based on
    baseResourceEN: "w", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.w.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.3, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 30, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	passiveGeneration() { return player.y.points.gte(10) },
    layerShown(){return true},
})
addLayer("y", {
    name: "y", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "y", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolEN: "y", // The second name of this appears on the layer's node ( If you open otherLanguageMod )
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#80FF00",
    requires: new Decimal(1e10 * (1.1 ** 23)), // Can be a function that takes requirement increases into account
    resource: "y", // Name of prestige currency
    resourceEN: "y", // The second name of prestige currency ( If you open otherLanguageMod )
    baseResource: "x", // Name of resource prestige is based on
    baseResourceEN: "x", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.x.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.25, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 31, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	passiveGeneration() { return player.z.points.gte(10) },
    layerShown(){return true},
})
addLayer("z", {
    name: "z", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "z", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolEN: "z", // The second name of this appears on the layer's node ( If you open otherLanguageMod )
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#70FF00",
    requires: new Decimal(1e10 * (1.1 ** 24)), // Can be a function that takes requirement increases into account
    resource: "z", // Name of prestige currency
    resourceEN: "z", // The second name of prestige currency ( If you open otherLanguageMod )
    baseResource: "y", // Name of resource prestige is based on
    baseResourceEN: "y", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.y.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.25, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 32, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	passiveGeneration() { return player.a2.points.gte(10) },
    layerShown(){return true},
})
addLayer("2layer small", {// Add a * small* to generate a slightly different layer
    name: "sideLayer2",
    position: -1,
    row: 33,
    symbol() {return (options.ch || modInfo.languageMod==false) ? '↓ 层级 2 ↓' : '↓ layer 2 ↓'},
    symbolEN() {return (options.ch || modInfo.languageMod==false) ? '↓ 层级 2 ↓' : '↓ layer 2 ↓'},
    nodeStyle: {"font-size": "15px", "text-center": "center", "height": "30px"},
    startData() { return {
        unlocked: true,
        small: true,
        points: new Decimal(0),// This actually does nothing, but you have to write this. (Unless you want add something in this layer. #Todo, might change that later.)
    }},
    color: "#fefefe",
    type: "none",
    tooltip(){return false},
    layerShown(){return layerDisplayTotal(['a2'])},// If any layer in the array is unlocked, it will returns true. Otherwise it will return false.
	tabFormat: [
        ["display-text", function() { return getPointsDisplay() }]
    ],
})

addLayer("a2", {
    name: "a2", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "a2", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolEN: "a2", // The second name of this appears on the layer's node ( If you open otherLanguageMod )
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#60FF00",
    requires: new Decimal(1e10 * (1.1 ** 25)), // Can be a function that takes requirement increases into account
    resource: "a2", // Name of prestige currency
    resourceEN: "a2", // The second name of prestige currency ( If you open otherLanguageMod )
    baseResource: "z", // Name of resource prestige is based on
    baseResourceEN: "z", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.z.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.25, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 34, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
})

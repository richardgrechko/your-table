addLayer("1layer small", {// Add a * small* to generate a slightly different layer
    name: "sideLayer1",
    position: -1,
    row: 0,
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
    baseResource: "points", // Name of resource prestige is based on
    baseResourceEN: "points", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.9, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
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
    requires: new Decimal(100 * (1.1 ** 0)), // Can be a function that takes requirement increases into account
    resource: "b", // Name of prestige currency
    resourceEN: "b", // The second name of prestige currency ( If you open otherLanguageMod )
    baseResource: "a", // Name of resource prestige is based on
    baseResourceEN: "a", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.a.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.9, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
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
    requires: new Decimal(100 * (1.1 ** 1)), // Can be a function that takes requirement increases into account
    resource: "c", // Name of prestige currency
    resourceEN: "c", // The second name of prestige currency ( If you open otherLanguageMod )
    baseResource: "b", // Name of resource prestige is based on
    baseResourceEN: "b", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.b.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.9, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
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
    requires: new Decimal(100 * (1.1 ** 2)), // Can be a function that takes requirement increases into account
    resource: "d", // Name of prestige currency
    resourceEN: "d", // The second name of prestige currency ( If you open otherLanguageMod )
    baseResource: "c", // Name of resource prestige is based on
    baseResourceEN: "c", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.c.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.9, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
})
addLayer("2layer small", {// Add a * small* to generate a slightly different layer
    name: "sideLayer2",
    position: -1,
    row: 27,
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

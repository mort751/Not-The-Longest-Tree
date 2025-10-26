addLayer("p", {
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    tooltip() { return format(player.points) + ' points' },
    color: "#dededeff",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "prestige points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},

    tabFormat: {
    "Main": {
        content: [
    ["display-text",
        function() { return 'You have <b>' + format(player.points) + '</b> points.' },
        { "font-size": "24px" }
    ],
    "blank",
    "milestones",
    "blank",
    "blank",
    "upgrades",
        ],
    },
    },

    componentStyles: {
    "upgrade"() { return {'height':'135px', 'width':'135px', 'border-radius': '10px'} },
    },

    upgrades: {
        11: {
            title: 'Point Upgrade A1',
            description: "Start generating points.",
            currencyInternalName: 'points',
            currencyDisplayName: 'points',
            cost: function() {
                let cost = new Decimal(0)
                return cost
            },
            effectDisplay() {
                return format(getPointGen()) + '/sec'
            }
        },
        12: {
            title: 'Point Upgrade A2',
            description: "Multiplies point generation by 2.",
            currencyInternalName: 'points',
            currencyDisplayName: 'points',
            cost: function() {
                let cost = new Decimal(5)
                return cost
            },
            effect() {
                let effect = new Decimal(2)
                return effect
            },
            effectDisplay() {
                return format(this.effect()) + '*'
            },
        },
    }
})

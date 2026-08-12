ServerEvents.recipes(event => {
    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                item: 'minecraft:cobblestone'
            },
            {
                item: 'minecraft:bone_meal'
            },
            {
                fluid: 'minecraft:water',
                amount: 8100
            }
        ],
        results: [
            {
                item: 'minecraft:calcite',
                count: 1
            }
        ]
    }).id('rosedalean:create/mixing/calcite');
    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                item: 'minecraft:calcite'
            },
            {
                item: 'minecraft:sand'
            },
            {
                fluid: 'minecraft:lava',
                amount: 4050
            }
        ],
        results: [
            {
                item: 'minecraft:quartz',
                count: 2
            }
        ]
    }).id('rosedalean:create/mixing/quartz');
});

ServerEvents.recipes(event => {
    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                tag: 'minecraft:coals'
            },
            {
                tag: 'minecraft:coals'
            },
            {
                item: 'minecraft:blaze_powder'
            }
        ],
        results: [
            {
                item: 'minecraft:gunpowder'
            }
        ]
    }).id('rosedalean:create/mixing/gunpowder');
});

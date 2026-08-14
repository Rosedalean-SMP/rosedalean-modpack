ServerEvents.recipes(event => {
    event.remove({ id: 'create:crafting/appliances/dough' });
    event.remove({ id: 'create:mixing/dough_by_mixing' });
    event.remove({ id: 'create:splashing/wheat_flour' });

    event.custom({
        type: 'minecraft:crafting_shapeless',
        category: 'misc',
        ingredients: [
            {
                tag: 'c:flour'
            },
            {
                item: 'minecraft:water_bucket'
            }
        ],
        result: {
            item: 'create:dough'
        }
    }).id('rosedalean:create/crafting/dough');

    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                tag: 'c:flour'
            },
            {
                fluid: 'minecraft:water',
                amount: 81000,
                nbt: {}
            }
        ],
        results: [
            {
                item: 'create:dough'
            }
        ]
    }).id('rosedalean:create/mixing/dough');

    event.custom({
        type: 'create:splashing',
        ingredients: [
            {
                tag: 'c:flour'
            }
        ],
        results: [
            {
                item: 'create:dough'
            }
        ]
    }).id('rosedalean:create/splashing/dough');
});

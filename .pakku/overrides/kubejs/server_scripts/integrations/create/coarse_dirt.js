ServerEvents.recipes(event => {
    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                item: 'minecraft:dirt'
            },
            {
                item: 'minecraft:dirt'
            },
            {
                item: 'minecraft:gravel'
            },
            {
                item: 'minecraft:gravel'
            }
        ],
        results: [
            {
                item: 'minecraft:coarse_dirt',
                count: 4
            }
        ]
    }).id('rosedalean:create/mixing/coarse_dirt');

    event.custom({
        type: 'create:crushing',
        ingredients: [
            {
                item: 'minecraft:coarse_dirt'
            }
        ],
        results: [
            {
                item: 'minecraft:dirt'
            }
        ],
        processingTime: 250
    }).id('rosedalean:create/crushing/coarse_dirt');
});

ServerEvents.recipes(event => {
    const addWoodCuttingRecipes = (mod, woods) => {
        woods.forEach(wood => {
            ['log', 'bark'].forEach(block => {
                event.custom({
                    type: 'create:cutting',
                    ingredients: [
                        {
                            item: `${mod}:${wood}_${block}`
                        }
                    ],
                    results: [
                        {
                            item: `${mod}:${wood}_stripped_${block}`,
                            chance: 1
                        }
                    ],
                    processingTime: 50
                }).id(`rosedalean:create/cutting/${mod}/${wood}_${block}`);
            });
        });
    };

    addWoodCuttingRecipes('betterend', [
        'dragon_tree',
        'end_lotus',
        'helix_tree',
        'jellyshroom',
        'lacugrove',
        'lucernia',
        'mossy_glowshroom',
        'pythadendron',
        'tenanea',
        'umbrella_tree'
    ]);
    addWoodCuttingRecipes('betternether', [
        'anchor_tree',
        'mushroom_fir',
        'nether_sakura',
        'rubeus',
        'wart',
        'willow'
    ]);
});

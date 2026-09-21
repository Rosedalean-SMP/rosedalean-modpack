ServerEvents.recipes(event => {
    const itemIngredients = (item, count) => {
        const ingredients = [];

        for (let index = 0; index < count; index++) {
            ingredients.push({ item: item });
        }

        return ingredients;
    };
    const fluidIngredient = (fluid, amount) => ({
        fluid: fluid,
        nbt: {},
        amount: amount
    });
    const addRecipe = (type, name, ingredients, results, properties) => {
        const recipe = {
            type: `create:${type}`,
            ingredients: ingredients,
            results: results
        };

        if (properties) {
            Object.keys(properties).forEach(property => {
                recipe[property] = properties[property];
            });
        }

        event.custom(recipe).id(`rosedalean:create/${type}/${name}`);
    };

    addRecipe(
        'compacting',
        'blaze_powder',
        itemIngredients('minecraft:blaze_powder', 6).concat([
            fluidIngredient('minecraft:lava', 4050)
        ]),
        [{ item: 'minecraft:blaze_rod' }]
    );
    addRecipe(
        'compacting',
        'calcite',
        [
            { item: 'minecraft:gravel' },
            { item: 'minecraft:bone_meal' },
            { item: 'minecraft:bone_meal' },
            { item: 'minecraft:bone_meal' }
        ],
        [{ item: 'minecraft:calcite' }]
    );
    addRecipe(
        'compacting',
        'deepslate',
        [
            { item: 'minecraft:cobblestone' },
            fluidIngredient('minecraft:lava', 4050)
        ],
        [{ item: 'minecraft:deepslate', count: 1 }]
    );
    addRecipe(
        'compacting',
        'tuff',
        itemIngredients('minecraft:cobblestone', 16).concat([
            fluidIngredient('minecraft:water', 4050)
        ]),
        [{ item: 'minecraft:tuff' }]
    );
    addRecipe(
        'compacting',
        'asurine',
        itemIngredients('create:zinc_nugget', 5).concat(
            itemIngredients('minecraft:gravel', 2),
            [fluidIngredient('minecraft:water', 20250)]
        ),
        [{ item: 'create:asurine', count: 2 }]
    );
    addRecipe(
        'compacting',
        'crimsite',
        itemIngredients('minecraft:iron_nugget', 7).concat(
            itemIngredients('minecraft:gravel', 2),
            [fluidIngredient('minecraft:lava', 20250)]
        ),
        [{ item: 'create:crimsite', count: 2 }]
    );
    addRecipe(
        'compacting',
        'ochrum',
        itemIngredients('minecraft:gold_nugget', 3).concat(
            itemIngredients('minecraft:gravel', 2),
            [fluidIngredient('minecraft:lava', 20250)]
        ),
        [{ item: 'create:ochrum', count: 2 }]
    );
    addRecipe(
        'compacting',
        'veridium',
        itemIngredients('create:copper_nugget', 15).concat(
            itemIngredients('minecraft:gravel', 2),
            [fluidIngredient('minecraft:lava', 20250)]
        ),
        [{ item: 'create:veridium', count: 2 }]
    );

    addRecipe(
        'crushing',
        'blackstone',
        [{ item: 'minecraft:blackstone' }],
        [
            { item: 'minecraft:wither_skeleton_skull', chance: 0.01 },
            { item: 'minecraft:blackstone', chance: 0.25 }
        ],
        { processingTime: 350 }
    );
    addRecipe(
        'crushing',
        'crying_obsidian',
        [{ item: 'minecraft:crying_obsidian' }],
        [
            { item: 'create:powdered_obsidian', chance: 1.0 },
            { item: 'create:powdered_obsidian', chance: 0.5 },
            { item: 'minecraft:amethyst_shard', chance: 0.375 }
        ],
        { processingTime: 500 }
    );
    addRecipe(
        'crushing',
        'end_stone',
        [{ item: 'minecraft:end_stone' }],
        [
            { item: 'minecraft:ender_pearl', chance: 0.085 },
            { item: 'minecraft:end_stone', chance: 0.75 }
        ],
        { processingTime: 450 }
    );
    addRecipe(
        'crushing',
        'limestone',
        [{ item: 'create:limestone' }],
        [
            { item: 'minecraft:quartz', chance: 0.125 },
            { item: 'minecraft:lapis_lazuli', chance: 0.08 }
        ],
        { processingTime: 250 }
    );
    addRecipe(
        'crushing',
        'nether_bricks',
        [{ item: 'minecraft:nether_bricks' }],
        [
            { item: 'minecraft:nether_brick', chance: 1.0 },
            { item: 'minecraft:nether_brick', chance: 0.25 },
            { item: 'minecraft:netherite_scrap', chance: 0.005 }
        ],
        { processingTime: 350 }
    );
    addRecipe(
        'crushing',
        'red_sandstone',
        [{ item: 'minecraft:red_sandstone' }],
        [
            { item: 'minecraft:red_sand' },
            { item: 'minecraft:nautilus_shell', chance: 0.01 }
        ],
        { processingTime: 150 }
    );
    addRecipe(
        'crushing',
        'scoria',
        [{ item: 'create:scoria' }],
        [
            { item: 'minecraft:blaze_powder', chance: 0.125 },
            { item: 'minecraft:blaze_rod', chance: 0.02 }
        ],
        { processingTime: 125 }
    );
    addRecipe(
        'crushing',
        'seagrass',
        [{ item: 'minecraft:seagrass' }],
        [
            { item: 'minecraft:seagrass', chance: 0.125 },
            { item: 'minecraft:sea_pickle', chance: 0.05 },
            { item: 'minecraft:heart_of_the_sea', chance: 0.005 }
        ],
        { processingTime: 250 }
    );
    addRecipe(
        'crushing',
        'soul_sand',
        [{ item: 'minecraft:soul_sand' }],
        [{ item: 'minecraft:glowstone_dust', chance: 0.125 }],
        { processingTime: 125 }
    );

    addRecipe(
        'haunting',
        'charcoal',
        [{ item: 'minecraft:charcoal' }],
        [{ item: 'minecraft:coal' }]
    );
    addRecipe(
        'haunting',
        'netherrack',
        [{ item: 'minecraft:basalt' }],
        [{ item: 'minecraft:netherrack' }]
    );
    addRecipe(
        'haunting',
        'obsidian',
        [{ item: 'minecraft:obsidian' }],
        [{ item: 'minecraft:crying_obsidian', chance: 0.125 }]
    );
    addRecipe(
        'haunting',
        'wither_rose',
        [{ item: 'minecraft:poppy' }],
        [{ item: 'minecraft:wither_rose' }]
    );

    addRecipe(
        'mixing',
        'dripstone',
        [
            { item: 'minecraft:calcite' },
            fluidIngredient('minecraft:water', 20250)
        ],
        [{ item: 'minecraft:dripstone_block', count: 1 }]
    );
    addRecipe(
        'mixing',
        'redstone',
        [
            { item: 'minecraft:netherrack' },
            { item: 'minecraft:flint' },
            fluidIngredient('minecraft:lava', 4050)
        ],
        [{ item: 'minecraft:redstone', count: 1 }]
    );

    addRecipe(
        'splashing',
        'packed_ice',
        [{ item: 'minecraft:packed_ice' }],
        [{ item: 'minecraft:blue_ice' }]
    );
});

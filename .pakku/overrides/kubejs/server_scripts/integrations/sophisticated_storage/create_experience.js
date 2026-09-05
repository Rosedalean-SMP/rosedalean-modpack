// Use Sophisticated Core's XP fluid as the shared experience fluid.
// Sophisticated backpacks and storage XP Pumps create this fluid.

const EXPERIENCE_TAG = 'forge:experience';
const CREATE_EXPERIENCE = 'create_enchantment_industry:experience';
const SOPHISTICATED_EXPERIENCE = 'sophisticatedcore:xp_still';

ServerEvents.tags('fluid', event => {
    // Allows Sophisticated XP Pumps to extract Create XP if a tank contains it.
    event.add(EXPERIENCE_TAG, CREATE_EXPERIENCE);
});

ServerEvents.recipes(event => {
    const experienceInput = amount => ({
        fluidTag: EXPERIENCE_TAG,
        amount: amount
    });

    const experienceOutput = amount => ({
        fluid: SOPHISTICATED_EXPERIENCE,
        amount: amount
    });

    const replaceRecipe = (id, recipe) => {
        event.remove({ id: id });
        event.custom(recipe).id(`rosedalean:sophisticated_storage/${id.replace(':', '/')}`);
    };

    replaceRecipe(
        'create_enchantment_industry:compacting/experience_block',
        {
            type: 'create:compacting',
            ingredients: [
                experienceInput(2187)
            ],
            results: [
                { item: 'create:experience_block' }
            ]
        }
    );

    replaceRecipe(
        'create_enchantment_industry:emptying/experience_bottle',
        {
            type: 'create:emptying',
            ingredients: [
                { item: 'minecraft:experience_bottle' }
            ],
            results: [
                { item: 'minecraft:glass_bottle' },
                experienceOutput(810)
            ]
        }
    );

    replaceRecipe(
        'create_enchantment_industry:filling/experience_bottle',
        {
            type: 'create:filling',
            ingredients: [
                { item: 'minecraft:glass_bottle' },
                experienceInput(810)
            ],
            results: [
                { item: 'minecraft:experience_bottle' }
            ]
        }
    );

    replaceRecipe(
        'create_enchantment_industry:filling/experience_cake',
        {
            type: 'create:filling',
            ingredients: [
                { item: 'create_enchantment_industry:experience_cake_base' },
                experienceInput(81000)
            ],
            results: [
                { item: 'create_enchantment_industry:experience_cake' }
            ]
        }
    );

    const addGrindingRecipe = (name, item, amount) => {
        replaceRecipe(
            `create_enchantment_industry:grinding/${name}`,
            {
                type: 'create_enchantment_industry:grinding',
                ingredients: [
                    { item: item }
                ],
                results: [
                    experienceOutput(amount)
                ]
            }
        );
    };

    addGrindingRecipe('experience_block', 'create:experience_block', 2187);
    addGrindingRecipe('experience_nugget', 'create:experience_nugget', 243);
    addGrindingRecipe(
        'super_experience_block',
        'create_enchantment_industry:super_experience_block',
        2187
    );
    addGrindingRecipe(
        'super_experience_nugget',
        'create_enchantment_industry:super_experience_nugget',
        243
    );

    if (Platform.isLoaded('create_sa')) {
        addGrindingRecipe(
            'create_sa/heap_of_experience',
            'create_sa:heap_of_experience',
            972
        );
    }

});

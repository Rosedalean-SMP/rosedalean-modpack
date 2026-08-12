ServerEvents.recipes(event => {
    event.shaped(
        'minecraft:name_tag',
        [
            ' N',
            'P '
        ],
        {
            N: Ingredient.of([
                'minecraft:iron_nugget',
                'minecraft:gold_nugget',
                'create:copper_nugget'
            ]),
            P: 'minecraft:paper'
        }
    ).id('rosedalean:crafting/name_tag');
});

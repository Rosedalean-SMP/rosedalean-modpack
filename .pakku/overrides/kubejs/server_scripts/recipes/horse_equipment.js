ServerEvents.recipes(event => {
    const horseArmor = (material, helmet, leggings, output) => {
        event.shaped(
            output,
            [
                '  H',
                'MWM',
                'L L'
            ],
            {
                H: helmet,
                M: material,
                W: 'minecraft:white_wool',
                L: leggings
            }
        ).id(`rosedalean:crafting/${output.split(':')[1]}`);
    };

    event.shaped(
        'minecraft:saddle',
        [
            'LLL',
            'S S',
            'I I'
        ],
        {
            L: 'minecraft:leather',
            S: 'minecraft:string',
            I: 'minecraft:iron_ingot'
        }
    ).id('rosedalean:crafting/saddle');

    event.remove({ id: 'minecraft:leather_horse_armor' });

    horseArmor(
        'minecraft:leather',
        'minecraft:leather_helmet',
        'minecraft:leather_leggings',
        'minecraft:leather_horse_armor'
    );
    horseArmor(
        'minecraft:iron_ingot',
        'minecraft:iron_helmet',
        'minecraft:iron_leggings',
        'minecraft:iron_horse_armor'
    );
    horseArmor(
        'minecraft:gold_ingot',
        'minecraft:golden_helmet',
        'minecraft:golden_leggings',
        'minecraft:golden_horse_armor'
    );
    horseArmor(
        'minecraft:diamond',
        'minecraft:diamond_helmet',
        'minecraft:diamond_leggings',
        'minecraft:diamond_horse_armor'
    );
});

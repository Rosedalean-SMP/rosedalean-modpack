const colors = [
    'black', 'blue', 'brown', 'cyan', 'gray', 'green', 'light_blue',
    'light_gray', 'lime', 'magenta', 'orange', 'pink', 'purple', 'red',
    'white', 'yellow'
];

const recipe = (group, tag, dye, result) => ({
    type: 'minecraft:crafting_shaped',
    category: group === 'stained_glass_pane' ? 'misc' : 'building',
    group: group,
    key: {
        '#': { tag: tag },
        X: { item: `minecraft:${dye}_dye` }
    },
    pattern: ['###', '#X#', '###'],
    result: { count: 8, item: `minecraft:${result}` },
    show_notification: true
});

ServerEvents.tags('item', event => {
    event.add('purpur:dyeable_concrete_powder', colors.map(color => `minecraft:${color}_concrete_powder`));
    event.add('purpur:dyeable_glass', ['minecraft:glass'].concat(colors.map(color => `minecraft:${color}_stained_glass`)));
    event.add('purpur:dyeable_glass_panes', ['minecraft:glass_pane'].concat(colors.map(color => `minecraft:${color}_stained_glass_pane`)));
});

ServerEvents.recipes(event => {
    const add = (id, group, tag, dye, result) => event.custom(recipe(group, tag, dye, result)).id(id);

    colors.forEach(color => {
        add(`rosedalean:crafting/dye_${color}_wool`, 'wool', 'minecraft:wool', color, `${color}_wool`);
        add(`rosedalean:crafting/dye_${color}_carpet`, 'carpet', 'minecraft:wool_carpets', color, `${color}_carpet`);

        add(
            `rosedalean:crafting/re_dyed_concrete_powder/${color}_concrete_powder`,
            'concrete_powder',
            'purpur:dyeable_concrete_powder',
            color,
            `${color}_concrete_powder`
        );

        event.remove({ id: `minecraft:${color}_stained_glass` });
        event.remove({ id: `minecraft:${color}_stained_glass_pane_from_glass_pane` });
        add(`rosedalean:crafting/${color}_stained_glass`, 'stained_glass', 'purpur:dyeable_glass', color, `${color}_stained_glass`);
        add(`rosedalean:crafting/${color}_stained_glass_pane_from_glass_pane`, 'stained_glass_pane', 'purpur:dyeable_glass_panes', color, `${color}_stained_glass_pane`);

        event.remove({ id: `minecraft:${color}_terracotta` });
        add(`rosedalean:crafting/${color}_terracotta`, 'stained_terracotta', 'minecraft:terracotta', color, `${color}_terracotta`);
    });
});

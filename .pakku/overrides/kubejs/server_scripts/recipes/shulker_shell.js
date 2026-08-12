ServerEvents.recipes(event => {
    event.shaped(
        'minecraft:shulker_shell',
        [
            'CCC',
            'C C'
        ],
        {
            C: 'minecraft:popped_chorus_fruit'
        }
    ).id('rosedalean:crafting/shulker_shell');
});

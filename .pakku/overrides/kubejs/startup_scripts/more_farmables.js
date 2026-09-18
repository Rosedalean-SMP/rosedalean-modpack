StartupEvents.registry('item', event => {
    const items = {
        shulker_shell_fragment: ['Shulker Shell Fragment', 'minecraft:item/shulker_shell'],
        shulker_compound: ['Shulker Compound', 'minecraft:item/chorus_fruit']
    };
    Object.entries(items).forEach(([id, [name, texture]]) =>
        event.create(`rosedalean:${id}`).displayName(name).texture(texture)
    );
});

StartupEvents.registry('fluid', event => {
    event.create('rosedalean:molten_endstone')
        .thickTexture(0xffff00)
        .bucketColor(0xffff00)
        .tag('minecraft:lava')
        .luminosity(15)
        .temperature(1300)
        .displayName('Molten Endstone');
});

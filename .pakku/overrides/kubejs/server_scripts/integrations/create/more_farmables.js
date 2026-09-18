ServerEvents.recipes(event => {
    const add = (id, recipe) => event.custom(recipe).id(id);
    event.remove({ id: 'create:crushing/asurine' });
    event.remove({ id: 'create:crushing/crimsite' });
    event.remove({ id: 'create:crushing/ochrum' });

    add("rosedalean:cmf/create/compacting/fluid_to_endstone", {"type":"create:compacting","ingredients":[{"amount":50000,"fluid":"rosedalean:molten_endstone"}],"results":[{"item":"minecraft:end_stone"}]});
    add("rosedalean:cmf/create/compacting/shulker_shell", {"type":"create:compacting","ingredients":[{"item":"rosedalean:shulker_shell_fragment"},{"item":"rosedalean:shulker_shell_fragment"}],"results":[{"item":"minecraft:shulker_shell","count":1}]});
    add("rosedalean:cmf/create/crushing/asurine_to_zinc_", {"type":"create:crushing","ingredients":[{"item":"create:asurine","count":2}],"results":[{"item":"create:crushed_raw_zinc","count":1,"chance":0.7},{"item":"create:zinc_nugget","count":3,"chance":0.7}],"processingTime":250});
    add("rosedalean:cmf/create/crushing/crimsite_to_iron", {"type":"create:crushing","ingredients":[{"item":"create:crimsite","count":2}],"results":[{"item":"create:crushed_raw_iron","count":1,"chance":0.7},{"item":"minecraft:iron_nugget","count":3,"chance":0.5}],"processingTime":250});
    add("rosedalean:cmf/create/crushing/ochrum_to_gold_", {"type":"create:crushing","ingredients":[{"item":"create:ochrum","count":2}],"results":[{"item":"create:crushed_raw_gold","count":1,"chance":0.7},{"item":"minecraft:gold_nugget","count":3,"chance":0.5}],"processingTime":250});
    add("rosedalean:cmf/create/haunting/netherrack_recipe", {"type":"create:haunting","ingredients":[{"item":"minecraft:andesite"}],"results":[{"item":"minecraft:netherrack","count":1}]});
    add("rosedalean:cmf/create/mixing/endstone_to_fluid", {"type":"create:mixing","heatRequirement":"heated","ingredients":[{"item":"minecraft:end_stone"}],"results":[{"amount":55000,"fluid":"rosedalean:molten_endstone"}]});
    add("rosedalean:cmf/create/mixing/shulker_compound", {"type":"create:mixing","heatRequirement":"heated","ingredients":[{"item":"minecraft:popped_chorus_fruit"},{"item":"minecraft:popped_chorus_fruit"}],"results":[{"item":"rosedalean:shulker_compound","count":1}]});
    add("rosedalean:cmf/create/mixing/shulker_shell_fragment", {"type":"create:mixing","heatRequirement":"heated","ingredients":[{"item":"rosedalean:shulker_compound"},{"item":"rosedalean:shulker_compound"},{"item":"rosedalean:shulker_compound"},{"item":"rosedalean:shulker_compound"},{"item":"minecraft:end_stone"}],"results":[{"item":"rosedalean:shulker_shell_fragment","count":2}]});
    add("rosedalean:cmf/create/splashing/dripstone_block", {"type":"create:splashing","ingredients":[{"item":"minecraft:stone"}],"results":[{"item":"minecraft:dripstone_block","count":1}]});
});

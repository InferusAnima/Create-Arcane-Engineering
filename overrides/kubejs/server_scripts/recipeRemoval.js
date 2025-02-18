onEvent('recipes', event => {
    event.remove({id: 'create:crafting/materials/rose_quartz'})
    event.remove({id: 'pneumaticcraft:refinery/oil_3'})
    event.remove({id: 'pneumaticcraft:refinery/oil_4'})
    event.remove({id: 'pneumaticcraft:refinery/oil_2'})     
    event.remove({id: 'tconstruct:common/flint'})
    event.remove({id: 'pneumaticcraft:assembly/unassembled_pcb'})
    event.remove({id: 'pneumaticcraft:pressure_chamber/empty_pcb'})
    // event.remove({id: 'create:splashing/soul_sand'})
    event.remove({id: 'tconstruct:smeltery/alloys/molten_lumium'})
    event.remove({id: 'tconstruct:smeltery/alloys/molten_enderium'})
    event.remove({id: 'tconstruct:smeltery/alloys/molten_signalum'})
    event.remove({id: 'tconstruct:smeltery/alloys/molten_constantan'})
    event.remove({id: 'tconstruct:smeltery/alloys/molten_invar'})
    event.remove({id: 'tconstruct:smeltery/alloys/molten_electrum'})
    event.remove({id: 'tconstruct:smeltery/alloys/molten_bronze'})
    event.remove({id: 'create:crushing/diorite'})
    event.remove({id: 'infernalexp:smelting/soul_stone'})
    event.remove({id: 'create:compat/ae2/milling/certus_quartz'})
    event.remove({id: 'ae2:misc/seeds_certus'})
    event.remove({id: 'create:crushing/diorite_recycling'})
    event.remove({id: 'thermal:machines/pulverizer/pulverizer_blaze_rod'})
    event.replaceInput({id:/.*thermal\:fire_charge.*/}, "minecraft:fire_charge", "forbidden_arcanus:smelter_prism")
    event.remove({output: '#forge:coins'})
    event.remove({output: 'thermal:rose_gold_ingot'})   
    event.remove({output: 'thermal:cinnabar'})
    event.remove({output: 'thermal:apatite'})
    event.replaceInput({output: "thermal:lumium_ingot"}, 'minecraft:glowstone_dust' , 'create:refined_radiance')
    event.remove({mod: "thermal", id: /.*dust_[0-9]/})
    event.remove({output: 'tconstruct:liquid_redstone'})    
    event.remove({output: 'tconstruct:liquid_redstone_bucket'})
    event.remove({output: 'thermal:niter'})
    event.remove({id: 'pneumaticcraft:heat_frame_cooling/plastic'}) 
    event.remove({id: 'pneumaticcraft:printed_circuit_board'})      
    event.remove({type: 'ae2:inscriber'})
    event.remove({id: 'pneumaticcraft:amadron/oil_to_emerald'})
    event.remove({id: 'pneumaticcraft:amadron/pcb_blueprint'}) 
    event.remove({output: 'thermal:glowstone_mushroom_spores'})
    event.remove({output: 'thermal:gunpowder_mushroom_spores'})
    event.remove({output: 'thermal:redstone_mushroom_spores'})
    event.remove({output: 'beyond_earth:iron_plate'})
    event.remove({output: 'thermal:slime_mushroom_spores'})
    event.remove({id: 'thermal:glowstone_mushroom_spores'})
    event.remove({id: 'thermal:compat/create/smelter_create_alloy_chromatic_compound'})
    event.remove({id: 'thermal:gunpowder_mushroom_spores'})
    event.remove({id: 'thermal:redstone_mushroom_spores'})
    event.remove({id: 'thermal:slime_mushroom_spores'})
    event.remove({id: 'thermal:slime_mushroom_spores'})
    event.remove({id: 'thermal:compat/create/pulverzier_create_tuff'})
    event.remove({id: 'createoreexcavation:drill'})
    event.remove({id: 'createoreexcavation:diamond_drill'})
    event.remove({id: 'createoreexcavation:netherite_drill_smithing'})
    event.remove({type: 'createoreexcavation:drilling'})
    event.remove({id: 'ars_nouveau:magebloom_fiber'})
    event.remove({id: 'glassential:glass_ghostly'}) 
    event.remove({output: 'ars_nouveau:source_gem'})
    event.remove({id: "create:compacting/andesite_from_flint"})
    event.remove({id: 'ars_nouveau:imbuement_amethyst_block'})
    event.remove({output: 'compressedcreativity:compressed_iron_casing'})
    event.remove({output:"waystones:waystone"})
    event.remove({id: "create:filling/redsone"})
    //event.remove({output: 'forbidden_arcanus:eternal_stella'})
})   
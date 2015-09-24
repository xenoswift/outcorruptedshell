var vanilla_stuff = ["portal", "end_portal", "fire", "water", "lava", "mob_spawner", "stone", "dirt", "cobblestone", "planks", "sapling", "bedrock", "flowing_water", "water", "flowing_lava", "lava", "sand", "gravel", "log", "leaves", "sponge", "glass", "tallgrash", "deadbush", "web", "tallgrass", "deadbush", "farmland", "lit_furnace", "ladder", "rail", "stonebrick", "leaves2", "double_plant", "command_block_minecart", "spawn_egg" ];
if (vanilla_enabled) {
    for each(thing in vanilla_stuff){ NEI.hide("minecraft", thing); }
	
	NEI.hide("minecraft:*_block");
	NEI.hide("minecraft:*_mushroom");
	NEI.hide("minecraft:*_flower");
	NEI.hide("minecraft:grass");
	NEI.hide("minecraft:monster_egg");
	NEI.hide("minecraft:log2");
	//NEI.hide("minecraft:");
	
    NEI.override("minecraft:potion", [0]);
    NEI.override("minecraft:dye", [0]);
    NEI.override("minecraft:spawn_egg", [0]);
	NEI.override("minecraft:wool", [0]);
	NEI.override("minecraft:carpet", [0]);
	NEI.override("minecraft:stained_glass*",[0]);
	NEI.override("minecraft:stained_hardened_clay",[0]);
	NEI.hide("minecraft:record_*");
	NEI.hide("minecraft:*stair*");
	NEI.hide("minecraft:*slab*");
	NEI.hide("minecraft:*wood*");
	NEI.hide("minecraft:golden_*");
	NEI.hide("minecraft:iron_*");
	NEI.hide("minecraft:stone_*");
	NEI.hide("minecraft:diamond_*");
	NEI.hide("minecraft:chainmail*");
	NEI.hide("minecraft:leather_*");
	NEI.hide("minecraft:*hoe*");
}
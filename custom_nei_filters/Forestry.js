if (FML.isModLoaded("Forestry") && Forestry_enabled) {
	NEI.hide("Forestry:log*");
	NEI.hide("Forestry:planks*");
	NEI.hide("Forestry:stained*");
	NEI.hide("Forestry:fireproof*");
	NEI.hide("Forestry:slabs*");
	NEI.hide("Forestry:fences*");
	NEI.hide("Forestry:stairs*");
	NEI.hide("Forestry:leaves*");
	NEI.hide("Forestry:sapling*");
	NEI.hide("Forestry:pods");
	NEI.hide("Forestry:ffarm");
	
	NEI.hide("Forestry:crated*");
	NEI.hide("Forestry:can*");
	NEI.hide("Forestry:wax*");
	NEI.hide("Forestry:refractory*");
	NEI.hide("Forestry:bucket*");
	NEI.hide("Forestry:pollen*");
	NEI.override("Forestry:beeCombs",[0]);
}

if (FML.isModLoaded("MagicBees") && Forestry_enabled) {
	NEI.override("MagicBees:capsule.magic", [0]);
	NEI.override("MagicBees:capsule.void", [0]);
}
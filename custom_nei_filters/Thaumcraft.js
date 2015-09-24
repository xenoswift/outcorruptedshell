//fuck what's the point in having ANY thaumcraft ADD-ONS on NEI either?
// it all unlocks via BOOOOK.

if (FML.isModLoaded("Thaumcraft") && Thaumcraft_enabled) {
	//what the fuck point is there in having Thaumcraft in NEI?
	//none of the fucking recipes show up anyways!
	NEI.hide("Thaumcraft:*");
	//NEI.hide("Thaumcraft:ItemWispEssence");
	//NEI.hide("Thaumcraft:ItemItemSpawnerEgg");	
}

if (FML.isModLoaded("ThaumicHorizons") && Thaumcraft_enabled) {
	NEI.hide("ThaumicHorizons:*");
}

if (FML.isModLoaded("thaumicenergistics") && Thaumcraft_enabled) {
	NEI.hide("thaumicenergistics:*");
}

if (FML.isModLoaded("WitchingGadgets") && Thaumcraft_enabled) {
	NEI.hide("WitchingGadgets:*"); 
}

if (FML.isModLoaded("technom") && Thaumcraft_enabled) {
	NEI.hide("technom:*"); 
}

if (FML.isModLoaded("thaumcraftneiplugin") && Thaumcraft_enabled) {
	NEI.hide("thaumcraftneiplugin:*"); 
}

if (FML.isModLoaded("Automagy") && Thaumcraft_enabled) { 
	NEI.hide("Automagy:*"); 
}
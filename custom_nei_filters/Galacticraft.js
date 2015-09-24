if (FML.isModLoaded("GalacticraftCore") && Galacticraft_enabled) {
	
	NEI.hide("GalacticraftCore:item.steel_*");
	NEI.hide("GalacticraftCore:*stair*");
	NEI.hide("GalacticraftCore:*Stair*");
	NEI.hide("GalacticraftCore:*wall*");
	NEI.hide("GalacticraftCore:*dirt*");
	NEI.hide("GalacticraftCore:*slab*");
	NEI.hide("GalacticraftCore:*turf*");
	NEI.hide("GalacticraftCore:*ore*");
	NEI.hide("GalacticraftCore:*block*");
	NEI.hide("GalacticraftCore:*schematic");
	
	NEI.override("GalacticraftCore:item.parachute", [0]);
	
	NEI.hide("GalacticraftMars:item.titanium_*");
	NEI.hide("GalacticraftMars:item.desh*");
	NEI.hide("GalacticraftMars:*ore*");
	NEI.hide("GalacticraftMars:*Block*");
	NEI.hide("GalacticraftMars:*mars*");
	NEI.hide("GalacticraftMars:*schematic");
	NEI.hide("GalacticraftMars:*schematic");
	
	//NEI.override("GalacticraftMars:", []);	
}

if (FML.isModLoaded("ExoElipse") && Galacticraft_enabled) {
	NEI.hide("ExoElipse:*");
	NEI.hide("SpaceIo:*");
	NEI.hide("SpaceEuropa:*");
	
	NEI.hide("SpaceMercury:iridium_*");
	NEI.hide("SpaceMercury:mercury_glowstone");
	
	NEI.hide("SpaceVenus:sulfur_*");
	NEI.hide("SpaceVenus:*decor*");
	NEI.hide("SpaceVenus:*basic");
	NEI.hide("SpaceVenus:ruby_*");
	
	NEI.hide("SpacePluto:sapphire_*");
	NEI.hide("SpacePluto:*block");

	//NEI.hide(":");
}
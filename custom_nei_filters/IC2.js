if (FML.isModLoaded("IC2") && IC2_enabled) {
	NEI.hide("IC2:itemFluidCell");
	NEI.hide("IC2:itemCrushedOre");
	NEI.hide("IC2:itemPurifiedCrushedOre");
	NEI.hide("IC2:itemDust*");
	NEI.hide("IC2:itemCasing");
	NEI.override("IC2:itemCellEmpty",[0]);
	NEI.hide("IC2:itemCasing");
	NEI.hide("IC2:itemToolPainter*");
	NEI.hide("IC2:itemCropSeed");
}
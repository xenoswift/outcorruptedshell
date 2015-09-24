if (FML.isModLoaded("BiblioCraft") && Bibliocraft_enabled) {
    NEI.override("BiblioCraft:*", [0]);
	NEI.hide("BiblioWoodsEBXL:*");
	NEI.hide("BiblioWoodsForestry:*");
	NEI.hide("BiblioWoodsNatura:*");
	
	//NEI.hide("BiblioWoodsForestry:BiblioWood*");
	//NEI.override("BiblioWoodsNatura:*", [0]);
	//NEI.hide("BiblioWoodsNatura:BiblioWood*");
}
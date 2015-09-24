if (FML.isModLoaded("arsmagica2") && AM2_enabled) { 
	NEI.hide("arsmagica2:AMSpawnEgg");
	NEI.override("arsmagica2:flickerJar",[0]);
	NEI.override("arsmagica2:Crystal Phylactery",[0]);
	NEI.override("arsmagica2:rune",[0]);
	NEI.override("arsmagica2:flickerFocus",[0]);
	//NEI.override("arsmagica2:",[0]);
	var _am2 = [ "standardFocus", "greaterFocus", "manaFocus", "chargeFocus", "playerFocus", "mobFocus", "itemFocus", "creatureFocus", "standardManaPotion", "greaterManaPotion", "epicManaPotion", "legendaryManaPotion", "manaPotionBundle", "spellBase", "bookAffinity"];
	for each (thing in _am2) { NEI.hide("arsmagica2", thing); }
}
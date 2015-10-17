if (FML.isModLoaded("appliedenergistics2") && AppliedEnergistics2_enabled) {
    NEI.override(AE2.getFacadeItem(), [java.random(AE2.getNumberOfTypes())]);
	
	NEI.override("appliedenergistics2:*ItemPaintBall",[0]);
}
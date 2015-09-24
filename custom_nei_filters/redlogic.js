if (FML.isModLoaded("RedLogic") && redlogic_enabled) {
	NEI.override("RedLogic:*lampCubeOn", [0]);
	NEI.override("RedLogic:*lampCubeOff", [0]);
	NEI.override("RedLogic:*lampCubeDecorative", [0]);
	NEI.override("RedLogic:*lampCubeIndicatorOn", [0]);
	NEI.override("RedLogic:*lampCubeIndicatorOff", [0]);
	NEI.override("RedLogic:*button", [0]);
	NEI.override("RedLogic:*lampNonCube", [0]);
}
// Microblocks always require special handling.
if (FML.isModLoaded("BuildCraft|Transport")) {

    // Special handler that cleanly removes facades.
    BC.obliterate_facades(java.random(BC.getFacadesSize()));

	NEI.hide("BuildCraft|Transport:pipeGate");
	NEI.hide("BuildCraft|Transport:pipePlug");
	NEI.hide("BuildCraft|Transport:pipeLens");
	NEI.hide("BuildCraft|Transport:pipeWIre");
	NEI.hide("BuildCraft|Transport:pipeBlock");
	
	NEI.hide("BuildCraft|Silicon:redstoneChipset");
	NEI.hide("BuildCraft|Silicon:package");
	
	NEI.override("BuildCraft|Silicon:laserTableBlock", [0]);
	
	NEI.override("BuildCraft|Robotics:robot", [0]);
	NEI.override("BuildCraft|Robotics:redstone_board", [0]);
	
	NEI.override("BuildCraft|Core:paintbrush", [0]);
	NEI.override("BuildCraft|Core:engineBlock", [0,1,2]);
	NEI.hide("BuildCraft|Core:debugger");
	NEI.hide("BuildCraft|Core:*GearItem");
	
	NEI.hide("Additional-Buildcraft-Objects:null");
	NEI.hide("Additional-Buildcraft-Objects:nullCollide");
	
	
	
}
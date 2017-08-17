function setupPlay() {
	
	var header = document.getElementById("header");
	header.className += "gameStart";

	var tagline = document.getElementById("tagline");
	tagline.className += "tagline-play";

	var foundX = document.getElementById("foundX");
	foundX.className += "foundX";

	var canvas = document.getElementById("game");
	canvas.className += "canvas-play";

	stage.removeChild(playbtn, bee,bbee,sbee);
	stage.update();
	setupItems();
	setupHexagons();
}

function setupItems() {
	beacons[0] = new Item("Base Isolator", "0C:F3:EE:0D:9F:D4", false, 0, true, "This item helps our building stay up during earthquakes", "This item is by the wall safe in the visitor center");
	beacons[1] = new Item("Liberty Bell", "0C:F3:EE:0D:A4:4C", false, 0, true, "Clue", "hint");
	beacons[2] = new Item("Olene Walker", "0C:F3:EE:0D:A4:4C", false, 0, true, "Clue", "hint");
	beacons[3] = new Item("House of Rep", "0C:F3:EE:0D:A4:4C", false, 0, true, "Clue", "hint");
	beacons[4] = new Item("Senate", "0C:F3:EE:0D:A4:4C", false, 0, true, "Clue", "hint");
	beacons[5] = new Item("Supreme Court", "0C:F3:EE:0D:A4:4C", false, 0, true, "Clue", "hint");
	beacons[6] = new Item("Governor's Office", "0C:F3:EE:0D:A4:4C", false, 0, true, "Clue", "hint");
	beacons[7] = new Item("Gold Room", "0C:F3:EE:0D:A4:4C", false, 0, true, "Clue", "hint");
	beacons[8] = new Item("Filo", "0C:F3:EE:0D:A4:4C", false, 0, true, "Clue", "hint");
	beacons[9] = new Item("Rotunda", "0C:F3:EE:0D:A4:4C", false, 0, true, "Clue", "hint");
}

function setupHexagons() {
	for(i in beacons) {
		var x;
		var textX;

		if(i == 0 || i % 2 == 0){
			x = (cwidth/2)-(cwidth/4);
		} else {
			x = (cwidth/2)+(cwidth/4);
		}
		hexagons[i] = new Hexagon(x,i);

		var textY = hexagons[i].yPlace - (hexagons[i].xPlace*1.5);

		hexTexts[i] = new Text(x,textY,beacons[i].name);
	}
	showGrid();
}

function showGrid(){

	for(i in hexagons){
		stage.addChild(hexagons[i]);
		stage.addChild(hexTexts[i]);
	}
	stage.update();

}

function showSingle() {

}
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
}
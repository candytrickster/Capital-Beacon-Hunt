function setupPlay() {
	
	var header = document.getElementById("header");
	header.className += "gameStart";

	var tagline = document.getElementById("tagline");
	$("#tagline").fadeOut(function() {
	  $(this).text("Found 0 of 10").fadeIn();
	});
	tagline.className += "tagline-play";

	var canvas = document.getElementById("game");
	canvas.className += "canvas-play";

	stage.removeChild(playbtn, bee,bbee,sbee);
	stage.update();
}
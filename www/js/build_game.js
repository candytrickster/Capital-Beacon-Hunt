var backbtn = document.getElementById("back");
var endbtn = document.getElementById("end");
var container = document.getElementById("container");

function setupPlay() {
	
	document.body.style.backgroundImage = "url('img/bg-no-capitol.png')";

	var header = document.getElementById("header");
	header.className += "gameStart";

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

		if(i == 0 || i % 2 == 0){
			x = (cwidth/2)-(cwidth/4);
		} else {
			x = (cwidth/2)+(cwidth/4);
		}
		hexagons[i] = new Hexagon(x,i);

		var textY = hexagons[i].yPlace - (hexagons[i].size*1.5);
		ShadowImage(i);
		hexTexts[i] = new Text(x,textY,beacons[i].name);
	}
	showGrid();
}

function showGrid(){

	backbtn.style.display = "none";
	container.style.display = "none";
	stage.removeAllChildren();
	var div = document.getElementById("app");
	for(i in hexagons){
		stage.addChild(hexagons[i]);
		// stage.addChild(hexTexts[i]);
		div.appendChild(hexTexts[i]);
		stage.addChild(shadowImages[i]);
		// console.log(shadowImages[i]);
	}

	for(i in hexagons){
		createjs.Tween.get(hexagons[i], {loop: false})
		.to({alpha: 1}, 100);
		createjs.Tween.get(shadowImages[i], {loop: false})
		.to({alpha: 1}, 100);
	}
	stage.update();

}

function showSingle(index) {

	// stage.removeAllChildren();
	// stage.addChild(hexagons[index]);
	// backbtn.className += "back-visible";
	createjs.Tween.get(hexagons[index],{loop:false})
	.to({ x: cwidth+(hexagons[i].size) }, 1000, createjs.Ease.getPowInOut(4));
	createjs.Tween.get(shadowImages[index],{loop:false})
	.to({ x: cwidth+(hexagons[i].size) }, 1000, createjs.Ease.getPowInOut(4));

	for(i in hexagons){
		if(i != index){        
			createjs.Tween.get(hexagons[i], {loop: false})
			.to({alpha: 0}, 100);
			createjs.Tween.get(shadowImages[i], {loop: false})
			.to({alpha: 0}, 100);
		}
	}


	var single = new SingleHex(index);
	stage.addChild(single);
	createjs.Tween.get(single,{loop:false})
	.to({ x: -(cwidth) }, 1000, createjs.Ease.getPowInOut(4));




















	var img = new Image();
	img.src = "img/shadowImages/"+index+".png";

	// img.onload = function() {
		var bitmap = new createjs.Bitmap(img);
		stage.addChild(bitmap);
		bitmap.scaleX = bitmap.scaleY = 0.7;
    	bitmap.y = single.yPlace - (bitmap.image.height/2.85);
    	bitmap.x = single.xPlace;
    	bitmap.xPlace = bitmap.x;
    	stage.addChild(bitmap);
    	stage.update();
    	createjs.Tween.get(bitmap,{loop:false})
		.to({ x: (cwidth/2)-(bitmap.image.width/2.85) }, 1000, createjs.Ease.getPowInOut(4));
	// }


	backbtn.style.display = "block"

	container.style.display = "block";

	document.addEventListener('deviceready', function() {
        setTimeout(bacon.scan, 1000);
        bacon.timer = setInterval(function(){bacon.updateList('0C:F3:EE:0D:9F:D4')}, 1000);
    }, false);



	backbtn.onclick = function() {
		createjs.Tween.get(single,{loop:false})
		.to({ x: cwidth+(cwidth/2) }, 1000, createjs.Ease.getPowInOut(4));
		createjs.Tween.get(bitmap,{loop:false})
		.to({ x: cwidth+(cwidth/2) }, 1000, createjs.Ease.getPowInOut(4));

		createjs.Tween.get(hexagons[index],{loop:false})
		.to({ x: 0 }, 1000, createjs.Ease.getPowInOut(4));
		createjs.Tween.get(shadowImages[index],{loop:false})
		.to({ x: shadowImages[index].xPlace }, 1000, createjs.Ease.getPowInOut(4));

		setTimeout("showGrid()",1000);
	}

	
}

function fillSingleShadow(){

}

function fillShadow(){

}


























































































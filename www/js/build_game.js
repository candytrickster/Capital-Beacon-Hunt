var canvas = document.getElementById("game");
var backbtn = document.getElementById("back");
var container = document.getElementById("container");
var foundX = document.getElementById("foundX");
var numFound = 0;

var blurFilter = new createjs.BlurFilter(5, 5, 1);


function setupPlay() {
	
	document.body.style.backgroundImage = "url('img/bg-no-capitol.png')";

	var header = document.getElementById("header");
	header.className += "gameStart";

	foundX.className += "foundX";

	canvas.className += "canvas-play";

	stage.removeChild(playbtn, bee,bbee,sbee);
	stage.update();
	setupItems();
	setupHexagons();
}

function setupItems() {
	beacons[0] = new Item("Base Isolator", "0C:F3:EE:0D:9F:D4", true, 0, false, "This item helps our building stay up during earthquakes", "This item is by the wall safe in the visitor center");
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
		// FilledImage(i);
		hexTexts[i] = new Text(x,textY,beacons[i].name);
	}
	setTimeout("showGrid()",1000);
}

function showGrid(){

	document.getElementById("message").innerHTML = "Searching ...";
	stage.removeAllChildren();
	backbtn.style.display = "none";
	container.style.display = "none";

	foundX.innerHTML = "Found "+numFound+" of 10";

	var div = document.getElementById("app");
	// console.log(shadowImages[i]);
	for(i in hexagons){
		
		if(beacons[i].found) {
			// console.log(shadowImages[i].stage);
			// stage.addChild(filledImages[i]);
			// var imageStage = shadowImages[i].stage;

			var img = new Image();
			img.src = "img/filledShadows/"+i+".png";
			var bitmap;
			// img.onload = function() {
				bitmap = new createjs.Bitmap(img);
				// stage.addChild(bitmap);
				bitmap.scaleX = bitmap.scaleY = 0.35;
		    	bitmap.y = hexagons[i].yPlace - (shadowImages[i].image.height/6);
		    	bitmap.x = hexagons[i].xPlace - (shadowImages[i].image.width/5.8);
		    	bitmap.xPlace = bitmap.x;
		    	shadowImages[i] = bitmap;
		    // }
		    	// return bitmap;
			

			// shadowImages[i].image.src = "img/filledShadows/"+i+".png";
			// shadowImages[i].stage = imageStage;
			// changeImage(i);
			hexagons[i].removeAllEventListeners();
		}

		stage.addChild(hexagons[i]);
		createjs.Tween.get(hexagons[i], {loop: false})
		.to({alpha: 1}, 200);
		// stage.addChild(hexTexts[i]);
		// div.appendChild(hexTexts[i]);
		stage.addChild(shadowImages[i]);
		createjs.Tween.get(shadowImages[i], {loop: false})
		.to({alpha: 0}, 100);
		console.log(shadowImages[i].image.src);
		createjs.Tween.get(shadowImages[i], {loop: false})
		.to({alpha: 1}, 200);
		

		
	}

	


}

function showSingle(index) {
	document.getElementById("message").innerHTML = "Searching ...";
	createjs.Tween.get(hexagons[index],{loop:false})
	.to({ x: cwidth+(hexagons[index].size) }, 1000, createjs.Ease.getPowInOut(4));

	// console.log(shadowImages[index]);

	createjs.Tween.get(shadowImages[index],{loop:false})
	.to({ x: cwidth+(hexagons[index].size) }, 1000, createjs.Ease.getPowInOut(4));

	for(i in hexagons){
		if(i != index){
			// stage.removeChild(shadowImages[i]);
			console.log(shadowImages[i]);//!!!!!!!
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
	var bitmap = new createjs.Bitmap(img);
	stage.addChild(bitmap);
	bitmap.scaleX = bitmap.scaleY = 0.7;
	bitmap.y = single.yPlace - (bitmap.image.height/2.85);
	bitmap.x = single.xPlace;
	bitmap.xPlace = bitmap.x;
	bitmap
	stage.addChild(bitmap);
	stage.update();
	createjs.Tween.get(bitmap,{loop:false})
	.to({ x: (cwidth/2)-(bitmap.image.width/2.85) }, 1000, createjs.Ease.getPowInOut(4));

	backbtn.style.display = "block"
	backbtn.style.marginTop = "-58px";
	container.style.display = "block";



	//start scanning
	setTimeout(bacon.scan, 1000);
    bacon.timer = setInterval(function(){
    	bacon.display(index,beacons[index].address);
    }, 1000);







	backbtn.onclick = function() {
		createjs.Tween.get(single,{loop:false})
		.to({ x: cwidth+(cwidth/2) }, 1000, createjs.Ease.getPowInOut(4));
		createjs.Tween.get(bitmap,{loop:false})
		.to({ x: cwidth+(cwidth/2) }, 1000, createjs.Ease.getPowInOut(4));

		createjs.Tween.get(hexagons[index],{loop:false})
		.to({ x: 0 }, 1000, createjs.Ease.getPowInOut(4));
		createjs.Tween.get(shadowImages[index],{loop:false})
		.to({ x: shadowImages[index].xPlace }, 1000, createjs.Ease.getPowInOut(4));
		
		//stop scanning
		
		clearInterval(bacon.timer);
		// setTimeout(stop,1000);






		setTimeout("showGrid()",1000);
	}

	
}

function fillSingleShadow(){

}

function fillShadow(index){

}

// function showAreYouSure() {
// 	var areYouSure = document.getElementById("areYouSure");
// 	var yesbtn = document.getElementById("yes");
// 	var nobtn = document.getElementById("no");

// 	areYouSure.style.display = "block";
// 	areYouSure.className += "areYouSure-visible";

// 	nobtn.onclick = function() {
// 		canvas.style.webkitFilter = "blur(0px)";
// 		areYouSure.style.display = "none";

// 	}

// 	yesbtn.onclick = function() {
		
// 	}
// }







// function listenForBeacon(index) {
// 	setTimeout(bacon.scan, 1000);
//     bacon.timer = setInterval(function(){bacon.updateList('0C:F3:EE:0D:9F:D4')}, 1000);
// }


//TO CHANGE IMG SOURCE!!!!! also stuff to do when beacon found
//-------------------------
// shadowImages[index].image.src = "img/filledShadows/"+index+".png";
// numFound += 1;
//if numfound == 10 (or make 10 a var called max?) win























































































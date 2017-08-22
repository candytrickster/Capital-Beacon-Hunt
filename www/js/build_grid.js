function Hexagon(x, index)
{
	var hex = new createjs.Shape();
	hex.graphics.beginStroke("#FFC700");
	hex.graphics.setStrokeStyle(10);
	var size = (cwidth/2)-(cwidth/3.5);
	var y= 290;
	
	if(index % 2 == 0 && index != 0) {
		y = y+((size*1.8)*index);
	} else if(index != 0 && index != 1) {
		y = y+((size*1.8)*(index-1));
	}
	hex.yPlace = y;
	hex.xPlace = x;
	hex.size = size;

	hex.graphics.beginFill("#FFDF00").drawPolyStar(x, y, size, 6, 0, 30);
	hex.addEventListener("click", function(event){
            showSingle(index);
        }.bind(this));

	return hex;
}

function ShadowImage(index) {
	var img = new Image();
	img.src = "img/shadowImages/"+index+".png";

	img.onload = function() {
		var bitmap = new createjs.Bitmap(img);
		// stage.addChild(bitmap);
		bitmap.scaleX = bitmap.scaleY = 0.35;
    	bitmap.y = hexagons[index].yPlace - (bitmap.image.height/6);
    	bitmap.x = hexagons[index].xPlace - (bitmap.image.width/5.8);
    	bitmap.xPlace = bitmap.x;
    	shadowImages[index] = bitmap;

    	// console.log(bitmap.image.width);
    	// return bitmap;
	}

	// var bitmap = new createjs.Bitmap(img);
	// stage.addChild(bitmap);


    // bitmap.scaleX = bitmap.scaleY = 0.08;
    // bitmap.x = hexagons[index].xPlace;
    // bitmap.y = hexagons[index].yPlace-(bitmap.width/2);
     
    // console.log(img.width);
    // stage.update();

    // bitmap.onClick = function(event) {
    //     bitmap.rotation = 35;
    //     bitmap.alpha = 0.5;
    //     stage.update(); 
    // }
}

// function FilledImage(index){
// 	var img = new Image();
// 	img.src = "img/filledShadows/"+index+".png";

// 	img.onload = function() {
// 		var bitmap = new createjs.Bitmap(img);
// 		bitmap.scaleX = bitmap.scaleY = 0.35;
//     	bitmap.y = hexagons[index].yPlace - (bitmap.image.height/6);
//     	bitmap.x = hexagons[index].xPlace - (bitmap.image.width/5.8);
//     	bitmap.xPlace = bitmap.x;
//     	filledImages[index] = bitmap;
// 	}
// }

// function changeImage(index){
// 	var img = new Image();
// 	img.src = "img/filledShadows/"+index+".png";

// 	img.onload = function() {
// 		var bitmap = new createjs.Bitmap(img);
// 		// stage.addChild(bitmap);
// 		bitmap.scaleX = bitmap.scaleY = 0.35;
//     	bitmap.y = hexagons[index].yPlace - (bitmap.image.height/6);
//     	bitmap.x = hexagons[index].xPlace - (bitmap.image.width/5.8);
//     	bitmap.xPlace = bitmap.x;
//     	shadowImages[index] = bitmap;
//     	stage.update();

//     	// console.log(bitmap.image.width);
//     	// return bitmap;
// 	}
// }


function SingleHex(index){
	var hex = new createjs.Shape();
	hex.graphics.beginStroke("#FFC700");
	hex.graphics.setStrokeStyle(10);
	var size = (cwidth/2.5);
	var x = cwidth+(cwidth/2);
	var y= cheight/2;
	
	hex.index = index;
	hex.xPlace = x;
	hex.yPlace = y;
	hex.size = size;

	hex.graphics.beginFill("#FFDF00").drawPolyStar(x, y, size, 6, 0, 30);
	return hex;
}





function Text(x,y,msg) {

	var text = document.createElement("p");
	var node = document.createTextNode(msg);
	text.appendChild(node);

	
	// text.className += "item-title";
	// text.style.marginTop = x+"px";
	// text.style.marginLeft = y+"px";
	// text.style.marginTop = "-"+x+"px";


	// var text = new createjs.Text(text, "22px Opensans", "#fff");
	// text.x = x;
	// text.y = y;
	// text.textBaseline = "bottom";
	// text.textAlgin = "center"

	return text;
}
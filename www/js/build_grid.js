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

function SingleHex(index){
	var hex = new createjs.Shape();
	hex.graphics.beginStroke("#FFC700");
	hex.graphics.setStrokeStyle(10);
	var size = (cwidth/2.5);
	var x = cwidth+(cwidth/2);
	var y= cheight/2;
	
	hex.index = index;

	hex.graphics.beginFill("#FFDF00").drawPolyStar(x, y, size, 6, 0, 30);
	return hex;
}





function Text(x,y,msg) {

	var text = document.createElement("p");
	var node = document.createTextNode(msg);
	text.appendChild(node);

	text.style.color = "#fff";
	text.style.fontSize = "26px";
	// text.style.marginTop = "-"+x+"px";


	// var text = new createjs.Text(text, "28px Noteworthy", "#fff");
	// text.x = x - (text.getBounds().width/2);
	// text.y = y;
	// text.textBaseline = "bottom";
	// text.textAlgin = "center"

	return text;
}
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
	hex.xPlace = size;

	hex.graphics.beginFill("#FFDF00").drawPolyStar(x, y, size, 6, 0, 30);
	return hex;
}

function Text(x,y,text) {
	var text = new createjs.Text(text, "28px Noteworthy", "#fff");
	text.x = x - (text.getBounds().width/2);
	text.y = y;
	text.textBaseline = "bottom";
	text.textAlgin = "center"

	return text;
}
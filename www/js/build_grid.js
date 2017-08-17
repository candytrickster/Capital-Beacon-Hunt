function Hexagon(x, index)
{
	var hex = new createjs.Shape();
	hex.graphics.beginStroke("#FFC700");
	hex.graphics.setStrokeStyle(10);
	var size = (cwidth/2)-(cwidth/3.5);
	var y= 290;
	
	if(index % 2 == 0 && index != 0) {
		y = y+((size*2)*index);
	} else if(index != 0 && index != 1) {
		y = y+((size*2)*(index-1));
	}

	hex.graphics.beginFill("#FFDF00").drawPolyStar(x, y, size, 6, 0, 30);
	return hex;
}

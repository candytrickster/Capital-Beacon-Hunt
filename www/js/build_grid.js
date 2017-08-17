function Hexagon(x, y)
{
	var hex = new createjs.Shape();
	hex.graphics.beginStroke("#FFC700");
	hex.graphics.setStrokeStyle(10);
	hex.graphics.beginFill("#FFDF00").drawPolyStar(x, y, 50, 6, 0, 30);
	return hex;
}

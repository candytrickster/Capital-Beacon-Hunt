function Hexagon(x, y, item)
{
	var hex = new createjs.Shape();
	hex.graphics.beginFill("#FF0").drawPolyStar(x, y, 50, 5, 0.6, -90);
	return hex;
}

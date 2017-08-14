function newitem(name, address, found, points, clickable) {
	var obj = {}
	obj.name = name;
	obj.address = address;
	obj.found = found;
	obj.points = points;
	obj.clickable = clickable;

	obj.done = function() = {
		this.clickable = !this.clickable;
		this.found = !this.found;
	}
}
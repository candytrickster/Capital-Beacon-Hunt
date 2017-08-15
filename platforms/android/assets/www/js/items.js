function Item(name, address, found, points, clickable, clue, hint) {
	this.name = name;
	this.address = address;
	this.found = found;
	this.points = points;
	this.clickable = clickable;
	this.clue = clue;
	this.hint = hint;

	this.done = function() = {
		this.clickable = !this.clickable;
		this.found = !this.found;
	}
}

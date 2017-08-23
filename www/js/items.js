function Item(name, address, found, points, clickable, clue, hint,funFact) {
	this.name = name;
	this.address = address;
	this.found = found;
	this.points = points;
	this.clickable = clickable;
	this.clue = clue;
	this.hint = hint;
	this.funFact = funFact;

	this.done = function() {
		this.clickable = !this.clickable;
		this.found = !this.found;
	}
}
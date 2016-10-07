HTMLCollection.prototype.forEach = Array.prototype.forEach;

// If this is changed from 6, remember that in styles.css,
// width and height of #grid must be 100px * gridSize
// because width and height of #grid > div is 100px
const gridSize = 6;
const grid = document.getElementById("grid");

const Cell = function(row, column) {
	const myDiv = document.createElement("DIV");
	var myTile;
	const myClick = function() {
		console.log(row + "," + column);
	};
	myDiv.onclick = myClick;
	return {
		myDiv,
		myTile
	};
};

const begin = function() {
	var grid = document.getElementById("grid");
	//for (var i = 0; i < 36; i++) {
	//	grid.appendChild(document.createElement("DIV"));
	//}
	//
	
	for (var i = 0; i < gridSize; i++) {
		for (var j = 0; j < gridSize; j++) {
			const newCell = Cell(i, j);
			grid.appendChild(newCell.myDiv);
		}
	}
	return;

	var children = grid.children;

	children.forEach(function(item, index) {
		var x = index % gridSize;
		var y = Math.floor(index / gridSize);
		var clicked = function() {
			console.log("" + x + "," + y);
		}
		item.onclick = clicked;
	});
}

window.onload = begin;

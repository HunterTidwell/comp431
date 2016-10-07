HTMLCollection.prototype.forEach = Array.prototype.forEach;

// If this is changed from 6, remember that in styles.css,
// width and height of #grid must be 100px * gridSize
// because width and height of #grid > div is 100px
const gridSize = 6;
const backSrc = "img/question-mark.jpg";
const deadSrc = "img/black.png";

const horizontalSrc = "img/straight1.png";
const verticalSrc = "img/straight2.png";

const imgSrcs = [horizontalSrc, verticalSrc, "img/bent1.png", "img/bent2.png", "img/bent3.png", "img/bent4.png"];

var swap;
var start;
var end;

var flipCounter;  
var flips = 0;

const Deadcell = function() {
	const cell = Cell(-1, -1);
	cell.myDiv.onclick = function() {};
	cell.setTile(Tile(deadSrc));
	cell.getTile().flip();
	return cell;
}

const Cell = function(row, column) {
	const myDiv = document.createElement("DIV");
	var src = imgSrcs[randInt(0, imgSrcs.length)];
	console.log(src);
	var myTile = Tile(src);
	myDiv.appendChild(myTile.myDiv);

	const getTile = function() {
		return myTile;
	}

	const setTile = function(newTile) {
		while (myDiv.firstChild) {
			myDiv.removeChild(myDiv.firstChild)
		}
		myTile = newTile;
		myDiv.appendChild(myTile.myDiv);
	}

	const myClick = function() {
		if (myTile.swappable()) {
			var temp = myTile;
			setTile(swap.getTile());
			swap.setTile(temp);
		} else {
			myTile.flip();
			addFlip();
		}
	}

	myDiv.onclick = myClick;
	return {
		myDiv,
		setTile, getTile
	}
}

const Tile = function(imgSrc, connectsTo) {
	const myDiv = document.createElement("DIV");
	const myImg = document.createElement("IMG");
	myImg.setAttribute("src", imgSrc);
	myImg.style.display = "none";
	myDiv.appendChild(myImg);

	const myBack = document.createElement("IMG");
	myBack.setAttribute("src", backSrc);
	myDiv.appendChild(myBack);

	var faceUp = false;

	const flip = function() {
		myImg.style.display = "inline";
		myBack.style.display = "none";
		faceUp = true;
	}

	const swappable = function() {
		//todo check based on type
		return faceUp;
	}

	return {
		myDiv, flip, connectsTo, swappable
	}
}

const randInt = function(minimum, maximum) {
	return Math.floor(Math.random() * (maximum - minimum)) + minimum;
}

const getBorderCoords = function() {
	var val = [0, 1 + randInt(0, gridSize)];
	if (Math.random() > 0.5) {
		val[0] += 1 + gridSize;
	}
	if (Math.random() > 0.5) {
		var temp = val[0];
		val[0] = val[1];
		val[1] = temp;
	}
	return val;
}

const addFlip = function() {
	flips ++;
	flipCounter.innerHTML = "FLIPCOUNT: " + flips;
}


const begin = function() {
	const grid = document.getElementById("grid");
	swap = Deadcell();
	swap.setTile(Tile(imgSrcs[0]));
	swap.getTile().flip();
	document.getElementById("swap").appendChild(swap.myDiv);
	var newCell;
	for (var i = 0; i < gridSize + 2; i++) {
		newCell = Deadcell();
		grid.appendChild(newCell.myDiv);
	}
	for (var i = 0; i < gridSize; i++) {
		newCell = Deadcell();
		grid.appendChild(newCell.myDiv);
		// For now, hard code the start cell
		if (i == 2) {
			newCell.setTile(Tile(horizontalSrc));
			newCell.getTile().flip();
			start = newCell;
		}
		for (var j = 0; j < gridSize; j++) {
			newCell = Cell(i, j);
			grid.appendChild(newCell.myDiv);
		}
		newCell = Deadcell();
		grid.appendChild(newCell.myDiv);
	}
	for (var i = 0; i < gridSize + 2; i++) {
		newCell = Deadcell();
		grid.appendChild(newCell.myDiv);
		if (i == 4) {
			newCell.setTile(Tile(verticalSrc));
			newCell.getTile().flip();
			end = newCell;
		}
	}
	flipCounter = document.getElementById("counter");

	return;
}

window.onload = begin;

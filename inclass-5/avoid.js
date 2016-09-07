var clicked = false;
var shifted = false;

window.onload = function() {
	var btn = document.getElementById("game_button");
	btn.addEventListener("click", click_the_button);
	btn.addEventListener("mouseover", mouseover_button);
	document.onkeydown = key_down;
	document.onkeyup = key_up;
}

function key_down(e) {
	if (e.which == 16) {
		shifted = true;
	}
}

function key_up(e) {
	if (e.which == 16) {
		shifted = false;
	}
}

function click_the_button() {
	var btn = document.getElementById("game_button");
	if (clicked) {
		btn.value = "Click Me";
		clicked = false;
		move_the_button();
	} else {
		btn.value = "Play Again";
		clicked = true;
	}
}


function mouseover_button() {
	if (clicked || shifted) {
	} else {
		move_the_button();
	}
}

function move_the_button() {
	var btn = document.getElementById("game_button");
	var new_left = Math.random() * 200;
	var new_top = Math.random() * 200;
	btn.style.left = new_left + "px";
	btn.style.top = new_top + "px";
}




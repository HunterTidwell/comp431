var imgs = ["Antelope Canyon", "Earth and Moon", "El Capitan", "Lion", "Yosemite 2", "Zebras"];

imgs.forEach(function(name, idx) {
	imgs[idx] = "img/" + name + ".jpg";
});


function new_card() {
	var div = document.createElement("div");
	div.className = "card";
	if (Math.random() > 0.3) {
		var pic = document.createElement("img");
		var pic_num = Math.floor(imgs.length * (Math.random() * 0.99));
		pic.src = imgs[pic_num];
		var pic_time = 10000 * Math.random();
		var int_num = setInterval(function() {pic.src = imgs[++pic_num % imgs.length]}, pic_time);
		div.appendChild(pic);
		var btn = document.createElement("input");
		btn.type = "button";
		btn.value = "Pause";
		btn.onclick = function() {
			clearInterval(int_num);
		}
		div.appendChild(btn);
	}
	var text = document.createElement("div");
	text.innerHTML = "Lorem ipsum dolor sit amet. More latin words would make the card look better, but I\'m going for a more stream-of-consciousness vibe. Potato purple bottle verb cantancerous excellent windy old word order. Watch, we wander witlessly without. Typing nonsense makes typing code seem that much more meaningful.";
	div.appendChild(text);
	return div;
}

function make_table_data(e) {
	var data = document.createElement("td");
	data.className = "data";
	data.appendChild(e);
	return data;
}

function new_row() {
	var row = document.createElement("tr");
	row.className = "card_row";
	for (var i = 0; i < 3; i++) {
		row.appendChild(make_table_data(new_card()));
	}
	return row;
}

function generate_cards() {
	var tbl = document.getElementById("card_table");
	for (var i = 0; i < 5; i++) {
		tbl.appendChild(new_row());
	}
}


window.onload = function() {
	generate_cards();
}



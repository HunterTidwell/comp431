var imgs = ["Antelope Canyon", "Earth and Moon", "El Capitan", "Lion", "Yosemite 2", "Zebras"];

imgs.forEach(function(name, idx) {
	imgs[idx] = "img/" + name + ".jpg";
});


function new_card() {
	var div = document.createElement("div");
	div.className = "card";
	//div.innerHTML = "lorem ipsum dolor sit amet";
	//div.innerHTML = "<img src=\"" + imgs[0] + "\" alt=\"wat\"\>";
	var pic = document.createElement("img");
	pic.src = imgs[0];
	//pic.heigh = 42;
	//pic.width = 50;
	div.appendChild(pic);
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
	for (var i = 0; i < 4; i++) {
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



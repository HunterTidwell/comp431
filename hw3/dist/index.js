var validate_form = function() {
	var p1 = document.forms["registration"]["password"].value;
	var p2 = document.forms["registration"]["password2"].value;
	if (p1 != p2) {
		alert("Password confirmation must match password!");
		return false;
	}
	return true;
}

var validate_login = function() {
	var name = document.getElementById("login_name").value;
	var pwd = document.getElementById("login_pwd").value;
	if ((name.length == 0) || (pwd.length == 0)) {
		alert("must enter name and password");
		return false;
	}
	window.location.href = "main.html";
}

window.onload = function() {
	const form = document.getElementById("registration_form");
	form.onsubmit = validate_form;
	form.setAttribute("action", "main.html");
	document.getElementById("login_btn").onclick = validate_login;
}

let navBtn = document.getElementById("navigationToggle");
let nav = document.getElementById("navigation");
let navchild = document.querySelectorAll(".nav-child");
function toggleNav() {
	if (nav.classList.contains("active")) {
		nav.classList.remove("active");
	} else {
		nav.classList.add("active");
	}
}
navBtn.addEventListener("click", toggleNav);

let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
	e.preventDefault();
	let name = document.getElementById("name");
	let gender = document.getElementsByName("gender");
	let username = document.getElementById("username");
	let email = document.getElementById("email");
	let emailcon = document.getElementById("emailcon");
	let password = document.getElementById("password");
	let passwordcon = document.getElementById("passwordcon");
	let tos = document.getElementById("tos");
	let error = document.getElementById("error");
	error.innerHTML = "";

	if (name.value.length < 5 || name.value.length > 30) {
		error.innerHTML = "Name is invalid!";
		return;
	}

	if (!validateEmail(email.value)) {
		error.innerHTML = "Email is invalid";
		return;
	}
	if (emailcon != email) {
		error.innerHTML = "EMail is different";
		return;
	}

	if (passwwordcon != password) {
		error.innerHTML = "Password is different";
		return;
	}

	if (!validatePass(password.value)) {
		error.innerHTML = "Password is invalid!";
		return;
	}

	if (!gender[0].checked && !gender[1].checked) {
		error.innerHTML = "Please select your gender";
		return;
	}

	if (!tos.checked) {
		error.innerHTML = "You must agree to the T&C";
		return;
	}

	let confirmres = confirm("Are you sure you want to submit?");
	if (confirmres) {
		alert("Register Success");
	} else {
		alert("Register Cancelled");
	}
});

function validateEmail(email) {
	return email.indexOf("@") != -1 && email.endsWith(".com");
}

function validatePass(password) {
	let length = password.length;
	let isalpha = false;
	let isnum = false;
	for (let i = 0; i < length; i++) {
		let charcode = password.charCodeAt(i);
		// Validasi current element adalah angka
		if (!isNaN(password[i])) {
			isnum = true;
		}
		if ((charcode >= 65 && charcode <= 90) || (charcode >= 97 && charcode <= 122)) {
			isalpha = true;
		}
	}
	if (isalpha && isnum) {
		return true;
	} else {
		return false;
	}
}

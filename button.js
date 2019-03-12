
function menuFunction1() {
	document.getElementById("myDropdown1").classList.toggle("show");
}

		
function menuFunction2() {
	document.getElementById("myDropdown2").classList.toggle("show");
}


window.onclick = function (event) {
	if (!event.target.matches('.dropbtn1')) {
		var dropdown = document.getElementsByClassName("dropdown-content1")[0];
		if (dropdown.classList.contains('show')) {
			dropdown.classList.remove('show');
		}
	}
	if (!event.target.matches('.dropbtn2')) {
		var dropdown = document.getElementsByClassName("dropdown-content2")[0];
		if (dropdown.classList.contains('show')) {
			dropdown.classList.remove('show');
		}	
	}
}
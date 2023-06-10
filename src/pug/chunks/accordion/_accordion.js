import * as functions from "../../js/functions.js";

let accordion1 = document.querySelectorAll('.accordion-cont > ul > li');
for (let i = 0; i < accordion1.length; i++) {
	accordion1[i].onclick = function () {
		accordion1[i].nextElementSibling.classList.toggle('active');
	};
}


functions.addRemoveClass('.dropdownbtn', '.dropdown');
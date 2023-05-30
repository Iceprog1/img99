import * as functions from "../../../js/functions.js";
//function toggleClass(toggleElement) {
//	document.querySelector(toggleElement).classList.toggle('active');
//};
//document.querySelector('.header-burger').onclick = () => { toggleClass('.header-nav') };
//document.querySelector('.close').onclick = () => {toggleClass('.header-nav') };

//Поучаем элемент dropdown
//let dropdown = document.querySelectorAll(".dropdownbtn");
//let drop = document.querySelector(".accordion-list");
//for (let i = 0; i < dropdown.length; i++) {
//	dropdown[i].onclick = () => {
//		//dropdown[i].parentElement.classList.toggle("active");
//		dropdown[i].firstElementChild.classList.toggle("rotate");
//		drop.classList.toggle("active");
//	};
//}


functions.mouseLeave('.dropdown');

functions.movingElement('.header-right', '.header-nav', '.header-nav', '1140');

functions.addRemoveClass('.menubtn', '.header-nav');

functions.addRemoveClass('.dropdownbtn', '.dropdown');


// 3 параметр должен вставть после выбранного элемента - внутрь элемента (в начало или клнец)
// +3.1 .header-nav - если передаем без знака вначале или в конце становится после этого элемента
// 3.2 +.header-nav - если в начале есть плюс падает внутрь элемента в конец
// 3.2 -.header-nav - если в начале есть минус падает внутрь элемента в начало
functions.movingElement('.header-right_lang', '-.header-nav', '-.header-right', '1140');

//document.querySelector('.dropdown').onclick = () => {
//	let en = document.querySelector('.header-right_lang__dropdown').classList.toggle('active');
//}

import * as functions from '../../../js/functions.js';
//function toggleClass(toggleElement) {
//	document.querySelector(toggleElement).classList.toggle('active');
//};
//document.querySelector('.header-burger').onclick = () => { toggleClass('.header-nav') };
//document.querySelector('.close').onclick = () => {toggleClass('.header-nav') };

//Поучаем элемент dropdown
let dropdown = document.querySelectorAll('.dropdown');
for (let i = 0; i < dropdown.length; i++) {
  dropdown[i].onclick = () => {
    dropdown[i].parentElement.classList.toggle('active');
    dropdown[i].firstElementChild.classList.toggle('rotate');
  };
}

//let mobdropdown = document.querySelectorAll('.menuB');
//for (let i = 0; i < mobdropdown.length; i++){
//	mobdropdown[i].onclick = () => {
//		document.querySelector('.header-mobmenu').classList.toggle('active');
//	}
//}

functions.mouseLeave('header-right_lang');

functions.addRemoveClass('menuB-line');

functions.movingOnOff('-header-nav', 'header-right_lang','+header-right', 1140);
functions.movingOnOff('header-nav', 'header-right', 'header-nav', 1140);

//window.addEventListener('resize', (e) => {
//  functions.movingOnOff('header-nav', 'header-right_lang', 1140, true);
//  functions.movingOnOff('header-nav', 'header-right', 1140);
//});
//document.querySelector('.dropdown').onclick = () => {
//	let en = document.querySelector('.header-right_lang__dropdown').classList.toggle('active');
//}

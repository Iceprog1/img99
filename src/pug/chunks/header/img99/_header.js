//function toggleClass(toggleElement) {
//	document.querySelector(toggleElement).classList.toggle('active');
//};
//document.querySelector('.header-burger').onclick = () => { toggleClass('.header-nav') };
//document.querySelector('.close').onclick = () => {toggleClass('.header-nav') };

//Поучаем элемент dropdown
let dropdown = document.querySelectorAll('.dropdown');
for (let i = 0; i < dropdown.length; i++){
	dropdown[i].onclick = () => {
		dropdown[i].parentElement.classList.toggle('active');
	}
}


//document.querySelector('.dropdown').onclick = () => {
//	let en = document.querySelector('.header-right_lang__dropdown').classList.toggle('active');
//}

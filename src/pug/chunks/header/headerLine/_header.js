function toggleClass(toggleElement) {
	document.querySelector(toggleElement).classList.toggle('active');
};
document.querySelector('.header-burger').onclick = () => { toggleClass('.header-nav') };
document.querySelector('.close').onclick = () => {toggleClass('.header-nav') };

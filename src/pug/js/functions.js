export function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

//Удаление класса при отведении мыши у элемента
export function mouseLeave (element, removeClass = 'active') {
	let el = document.querySelectorAll(`.${element}`);
	for (let i = 0; i < el.length; i++) {
		el[i].onmouseleave = () => {
			el[i].classList.remove(removeClass);
		}
	}
}

//Добавление и удаление класса у элемента
export function addRemoveClass (element, addRemove = 'openclose'){
	let add = document.querySelector(`.${element}`);
	add.onclick = () => {
		add.classList.toggle(addRemove);
	}
}

//Перемещает элемент на мобилке и возвращает обратно на десктоп версии
export function movingOnOff(el, movElem, backEL, width) {
	// Удаляет первый символ строки у параметра el
	let elClass = el;
	if(elClass[0] == '+' || elClass[0] ==  '-'){
		elClass = el.substring(1);
	}

	// Удаляет первый символ строки у параметра backEL
	let backElementClass = backEL;
	if(backElementClass[0] == '+' || backElementClass[0] ==  '-'){
		backElementClass = backEL.substring(1);
	}
	
	// Получаем элементы со страницы
	let element = document.querySelector(`.${elClass}`);
	let movingElement = document.querySelector(`.${movElem}`);
	let backElement = document.querySelector(`.${backElementClass}`);

	if(window.innerWidth <= width){
		if(el[0] == '-'){
			element.prepend(movingElement);
		}
		else{
			element.append(movingElement);
		}
	}
	window.addEventListener("resize", (e) => {
		if(window.innerWidth <= width){
			if(el[0] == '-'){
				element.prepend(movingElement);
			}
			else{
				element.append(movingElement);
			}
		}
		else{
			if(backEL[0] == '+') {
				backElement.prepend(movingElement);
			}else{
				backElement.parentNode.insertBefore(movingElement, backElement.nextSibling);
			}
		}
	});
}



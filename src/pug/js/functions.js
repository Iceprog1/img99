//ширины экранов
let sm = "540px";
let md = "720px";
let lg = "960px";
let xl = "1140px";

export function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src =
		"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

//Удаление класса при отведении мыши у элемента
export function mouseLeave(element, removeClass = "active") {
	let el = document.querySelectorAll(element);
	if (removeClass[0] == '.') {
		removeClass = removeClass.slice(1);
	}
	for (let i = 0; i < el.length; i++) {
		el[i].onmouseleave = () => {
			el[i].classList.remove(removeClass);
		};
	}
}


//Добавление и удаление класса у основго и выбранного элемента
export function addRemoveClass(element, nextElem = '', addRemove = "active") {
	// Переменные
	let clickElement = document.querySelectorAll(element);
	let nextEl = document.querySelector(nextElem);
	// Если есть точка то удалеям ее 
	if (addRemove[0] == '.') {
		addRemove = addRemove.slice(1);
	}

	// Проходимся по каждому элементу
	for (let i = 0; i < clickElement.length; i++) {
		// Делаем клик по текущему элементу
		clickElement[i].onclick = () => {
			// Добавляет или удаляет класс active
			//nextEl.classList.toggle(addRemove);
			clickElement[i].closest('.dropdown').classList.toggle(addRemove)
		}
	}

	clickElement.onclick = () => {
		//clickElement.classList.toggle(addRemove);
		nextEl.classList.toggle(addRemove);
		console.log(nextEl);
		let body = document.querySelector('body');
		if (nextEl.classList.contains('active')) {
			body.classList.add('active');
		}
		else {
			body.classList.remove('active');
		}
	};
}


export function movingElement(movEl, whereEl, backEl, width) {
	//----------------------------------------------------------------------------
	// Удаление первого символа у строки
	// Переменной whereElRemove присваиваем значение параметра whereEl
	let whereElRemove = whereEl; // whereElRemove = -.header-nav
	// Пишем условие если у переменной whereElRemove первый символ равен -
	if (whereElRemove[0] == "-") {
		// то удаляем первый символ и присваиваем переменной whereElRemove значение без минуса
		whereElRemove = whereElRemove.slice(1); // whereElRemove = .header-nav
	}
	//----------------------------------------------------------------------------

	//----------------------------------------------------------------------------
	// Удаление первого символа у строки
	// Переменной backElRemove присваиваем значение параметра backEl
	let backElRemove = backEl;
	// Пишем условие если у переменной backElRemove первый символ равен -
	if (backElRemove[0] == "-" || backElRemove[0] == "+") {
		// то удаляем первый символ и присваиваем переменной backElRemove значение без минуса
		backElRemove = backElRemove.slice(1);
	}
	//----------------------------------------------------------------------------


	//----------------------------------------------------------------------------
	// Переменные
	let movingElement = document.querySelector(`${movEl}`);
	let where = document.querySelector(`${whereElRemove}`); // whereEl = -.header-nav
	//----------------------------------------------------------------------------


	//----------------------------------------------------------------------------
	// Вызов функции которая следит за шириной экрана
	movingIn();
	//----------------------------------------------------------------------------



	//----------------------------------------------------------------------------
	// Слежение за шириной экрана
	window.addEventListener("resize", (e) => {
		movingIn();
	});
	//----------------------------------------------------------------------------



	//----------------------------------------------------------------------------
	// Функция которая отслеживает ширину экрана и говорит куда закинуть элемент вниз или вверх
	function movingIn() {
		// Если экран меньше 1140
		if (window.innerWidth <= width) {
			if (whereEl[0] == "-") {
				// Переместить вверх элемента
				where.prepend(movingElement);
			} else {
				// Переместить вниз элемента
				where.append(movingElement);
			}
		} else {
			document.querySelector('body').classList.remove('active')
			//----------------------------------------------------------------------------
			// Переменные
			let backElement = document.querySelector(backElRemove);
			let movingElem = document.querySelector(movEl);
			//----------------------------------------------------------------------------

			//----------------------------------------------------------------------------
			// backEl = '-.header-nav'
			if (backEl[0] == '-' || backEl[0] == '+') {
				//where.prepend(movingElement);
				if (backEl[0] == '-') {
					backElement.prepend(movingElement);
				} else {
					backElement.append(movingElement);
				}
			} else {
				//----------------------------------------------------------------------------
				// Возвращение элемента обратно
				// Перемещение после указанного элемента или внутрь 
				backElement.parentNode.insertBefore(movingElem, backElement.nextSibling);
				//----------------------------------------------------------------------------
			}
			//----------------------------------------------------------------------------
		}
	}
	//----------------------------------------------------------------------------


}

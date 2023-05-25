//появление блоков на карточке товара
let cartsBtn = document.querySelectorAll('.showSizes');

for (let i = 0; i < cartsBtn.length; i++) {
	
	cartsBtn[i].onclick = () => {
		cartsBtn[i].previousElementSibling.classList.add('active');
	}
	cartsBtn[i].previousElementSibling.onmouseleave = () => {
		cartsBtn[i].previousElementSibling.classList.remove('active');
	}
	cartsBtn[i].parentElement.onmouseleave = () => {
		cartsBtn[i].previousElementSibling.classList.remove('active');
	}
}


//добавить удалить количетсво в инпуте
let quantityAll = document.querySelectorAll('.quantity');
for (let i = 0; i < quantityAll.length; i++) {
	quantityAll[i].previousElementSibling.onclick = () => {
		if (quantityAll[i].value > 0) {
			--quantityAll[i].value
		}
	}
	quantityAll[i].nextElementSibling.onclick = () => {
		++quantityAll[i].value
	}
}
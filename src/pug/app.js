import * as flsFunctions from "./js/functions.js";
import * as productAndSlider from "../pug/chunks/product/productAndSlider/_productAndSlider.js";
import * as accordion from "./chunks/accordion/_accordion.js";
import * as swiper from "./chunks/slider/sliderVertical/_sliderVertical.js";
import * as sizes from "./chunks/sizes/_sizes.js";
import * as header from "./chunks/header/img99/_header.js";


const filter = document.querySelector('.orders-filter_title');
const ordersFilter = document.querySelector('.orders-filter ul');

if(document.querySelector('.orders-filter_title')){
	
	document.querySelector('.orders-filter_title').onclick = () => {
		ordersFilter.classList.add('active');
	
	}
}

if(document.querySelector('.orders-filter_title')){
	document.addEventListener('click', (e) => {
		const withinBoundaries = e.composedPath().includes(filter);
		const withinBoundaries2 = e.composedPath().includes(ordersFilter);
		if (!withinBoundaries && !withinBoundaries2) {
			ordersFilter.classList.remove('active');
		}
	})
}



let item_head = document.querySelectorAll('.orders-item_head ul li i');
let item_cont = document.querySelectorAll('.orders-item_cont');

for (let i = 0; i < item_head.length; i++) {
	item_head[i].onclick = (e) => {
		console.log('111');
		item_cont[i].classList.toggle('active');
	}
}


let dimensions = document.querySelectorAll('.dimensions > ul > li');
for (let i = 0; i < dimensions.length; i++) {
	dimensions[i].onclick = function () {
		let chest = dimensions[i].dataset.chest;
		let hips = dimensions[i].dataset.hips;
		document.querySelector('.che').innerHTML = chest;
		document.querySelector('.hip').innerHTML = hips;
	}
}

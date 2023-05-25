// Включение swiper
var verticalSliderLeft = new Swiper(".verticalSliderLeft", {
	spaceBetween: 16,
	slidesPerView: 5,
	freeMode: true,
	autoHeight: false,
	watchSlidesProgress: true,
	direction: "vertical",

});

var verticalSliderRightswiper2 = new Swiper(".verticalSliderRight", {
	autoHeight: false,
	slidesPerView: 'auto',
	thumbs: {
		swiper: verticalSliderLeft,
	},
});


let similarSweper = new Swiper(".similarSweper", {
	rewind: true,
	autoHeight: true,
	slidesPerView: 5,
	spaceBetween: 50,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		350: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		650: {
			slidesPerView: 3,
		},
		992: {
			slidesPerView: 3,
		},
		1300: {
			slidesPerView: 5,
		}
	},
});
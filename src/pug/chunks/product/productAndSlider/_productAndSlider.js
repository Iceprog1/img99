// Включение swiper
let productAndSlider = new Swiper(".productAndSlider", {
	rewind: true,
	autoHeight: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
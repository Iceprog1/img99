import * as functions from "./js/functions.js";
import * as productAndSlider from "../pug/chunks/product/productAndSlider/_productAndSlider.js";
import * as accordion from "./chunks/accordion/_accordion.js";
import * as swiper from "./chunks/slider/sliderVertical/_sliderVertical.js";
import * as sizes from "./chunks/sizes/_sizes.js";
import * as header from "./chunks/header/img99/_header.js";
import * as footer from "./chunks/footer/footerCol/_footer.js";
import * as colorpicker from "./chunks/colorpicker/_colorpicker.js";
import * as color from "./chunks/colorpicker/_color.js";
//import * as colorjoe from "colorjoe";


//const joe = colorjoe.rgb(element_id_or_dom_object, initial_color_value, extras);



functions.testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});

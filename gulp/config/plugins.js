import replace from "gulp-replace"; //поиск и замена
import plumber from "gulp-plumber"; //поиск и замена
import notify from "gulp-notify"; //поиск и замена
import browserSync from "browser-sync"; //поиск и замена
import newer from "gulp-newer";


export const plugins = {
	replace: replace,
	plumber: plumber,
	notify: notify,
	browserSync: browserSync,
	newer: newer,
}
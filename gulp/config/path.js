//Получаем имя папки проекта
import * as nodePath from 'path';
//получаем имя папки проекта
const rootFolder = nodePath.basename(nodePath.resolve());

//путь к папке с результатом
const buildFolder = `./dist`;
//путь к папке с исходниками
const srcFolder = `./src`;

export const path = {
	//объект путей к папке с рузультатами
	build: {
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		images: `${buildFolder}/img/`,
		svg: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`,
		files: `${buildFolder}/files/`,
	},
	//объект путей с исходными файлами
	src: {
		js: `${srcFolder}/pug/app.js`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/img/**/*.svg`,
		sass: `${srcFolder}/pug/main.sass`,
		html: `${srcFolder}/*.pug`,
		files: `${srcFolder}/files/**/*.*`,
	},
	//объект путей за которыми должен следить gulp и при изменении выполнять действия
	watch: {
		js: `${srcFolder}/pug/**/*.js`,
		sass: `${srcFolder}/pug/**/*.sass`,
		html: `${srcFolder}/**/*.pug`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,webp}`,
		files: `${srcFolder}/files/**/*.*`,
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: `./`
}
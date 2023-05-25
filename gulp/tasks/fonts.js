import fs from 'fs';
import fonter from 'gulp-fonter-2';
import ttf2woff2 from 'gulp-ttf2woff2';
export const otfToTtf = () => {
	return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {})
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				'title': 'FONTS',
				'message': "Error: <%= error.message %>"
			})))
		//конвертируем в .ttf
		.pipe(fonter({
			formats: ['ttf']
		}))
		//выгружаем в исходную папку 
		.pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
}
export const ttfToWoff = () => {
	//ищем файлы шрифтов .ttf
	return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				'title': 'FONTS',
				'message': "Error: <%= error.message %>"
			})))
		//конвертируем в .woff
		.pipe(fonter({
			formats: ['woff']
		}))
		//выгружаем в папку c результатом
		.pipe(app.gulp.dest(`${app.path.build.fonts}`))
		//ищем файлы шрифтов .ttf
		.pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {}))
		//конвертируюем в .woff2
		.pipe(ttf2woff2())
		//выгружаем в папку c результатом
		.pipe(app.gulp.dest(`${app.path.build.fonts}`));
}


export const fontStyle = () => {
	//файл стилей подключения шрифтов

	let fontsFile = `${app.path.srcFolder}/pug/base/sass/_fonts.sass`;
	//проверяем существуют ли файлы шрифтов
	fs.readdir(app.path.build.fonts, function (err, fontsFiles) {

		if (fontsFiles) {

			//проверяем существует ли файл стилей для подключения шрифтов
			//if (!fs.existsSync(fontsFile)) {
			if (true) {

				//если файла нет создаем его
				fs.writeFile(fontsFile, '', cd);
				let newFileOnly;
				console.log(fontsFiles);

				for (var i = 0; i < fontsFiles.length; i++) {
					//записываем подключения шрифтов в файл стилей  
					let fontFileName = fontsFiles[i].split('.')[0];
					if (newFileOnly !== fontFileName) {
						let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
						let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;

						if (fontWeight.toLowerCase() === 'thin') {
							fontWeight = 100;
						} else if (fontWeight.toLowerCase() === 'light') {
							fontWeight = 300;
						} else if (fontWeight.toLowerCase() === 'regular') {
							fontWeight = 400;
						} else if (fontWeight.toLowerCase() === 'medium') {
							fontWeight = 500;
						} else if (fontWeight.toLowerCase() === 'semibold') {
							fontWeight = 600;
						} else if (fontWeight.toLowerCase() === 'bold') {
							fontWeight = 700;
							console.log(fontWeight);
						} else if (fontWeight.toLowerCase() === 'extrabold' || fontWeight.toLowerCase() === 'heavy') {
							fontWeight = 800;
						} else if (fontWeight.toLowerCase() === 'black') {
							fontWeight = 900;
						} else {
							fontWeight = 500;
						}
						fs.appendFile(fontsFile, `@font-face\r\n	font-family: ${fontName}\r\n	font-display: swap\r\n	src: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff")\r\n	font-weight: ${fontWeight}\r\n	font-style: normal\r\n\r\n`, cd);
						newFileOnly = fontFileName;
					} else {
						console.log('Файл fonts существует');

					}
				}
			}
		}
	});

	return app.gulp.src(`${app.path.srcFolder}`);

	function cd() {}

}
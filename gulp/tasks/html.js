import fileinclude from 'gulp-file-include';
import webpHtmlNosvg from 'gulp-webp-html-nosvg';
import versionNumber from 'gulp-version-number';
import pug from 'gulp-pug';

//функция для копирования файлов
export const html = () => {

	return app.gulp.src(app.path.src.html)//получаем доступ к папкам и файлам по указаному пути
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				'title': 'Html',
				'message': "Error: <%= error.message %>"
			}))
		)
		//.pipe(fileinclude())//собирает все файлы с знаком @@ в один
		.pipe(//преобразование .pug файлов в html 
			pug({
				//сжатие html файла
				pretty: true,
				//показывать какой файл в терминале обработан
				verbose: true,
			})
		)
		.pipe(app.plugins.replace(/@img\//g, 'img/'))//через регулярное выражение меняет @img = img/
		.pipe(webpHtmlNosvg())//преобразовывает фотографии в webp и сжимает их (кроме svg)
		.pipe(//устанавливает ключ после css.324e2423423 чтобы не кэшировались файлы
			versionNumber({
				'value': '%DT%',
				'append': {
					'key': '_v',
					'cover': 0,
					'to': [
						'css',
						'js',
					]
				},
				'output': {
					'file': 'version.json'
				}
			})
		)
		//указываем куда копировать эти файлы
		.pipe(app.gulp.dest(app.path.build.html))
		//включаем наблюдатель за изменениями в файлах
		.pipe(app.plugins.browserSync.stream())
}
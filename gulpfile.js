//основной модуль
import gulp from 'gulp';
//импорт путей
import { path } from './gulp/config/path.js';

//передаем значения в глобальную переменную
global.app = {
	path: path,
	gulp: gulp,
	plugins: plugins,
}


//импорт задач

import { reset } from './gulp/tasks/reset.js'; //удаляет папку dist
import { copy } from './gulp/tasks/copy.js';//копирует все с папки src/files в папку dist/files
import { html } from './gulp/tasks/html.js';//копирует все с папки src/files в папку dist/files
import { plugins } from './gulp/config/plugins.js';//подключаем все нужные влагины в переменную
import { sass } from './gulp/tasks/sass.js';//подключаем файл наблюдения за изменениями файлов html
import { server } from './gulp/tasks/server.js';//подключаем файл наблюдения за изменениями файлов html
import { js } from './gulp/tasks/js.js';//подключаем файл наблюдения за изменениями файлов js
import { images } from './gulp/tasks/images.js';//подключаем файл наблюдения за изменениями файлов js
import { otfToTtf, ttfToWoff, fontStyle } from './gulp/tasks/fonts.js';//подключаем файл наблюдения за изменениями файлов js
import { ftp } from './gulp/tasks/ftp.js' // отправляем файлы на ftp


//наблюдатль (смотрит за изменениями в файлах)
//function watcher() {
//	gulp.watch(path.watch.files, copy);
//	gulp.watch(path.watch.html, html);
//	gulp.watch(path.watch.sass, sass);
//	gulp.watch(path.watch.js, js);
//	gulp.watch(path.watch.images, images);
//}

function watcher() {
	gulp.watch(path.watch.files, copy);
	gulp.watch(path.watch.html, gulp.series(html, ftp));
	gulp.watch(path.watch.sass, gulp.series(sass, ftp));
	gulp.watch(path.watch.js, gulp.series(js, ftp));
	gulp.watch(path.watch.images, images);
}

//Последовательное обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontStyle);

//построение сценариев выполнения задач (parallel => выполняет построение задач паралельно)
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, sass, js, images));

// связано с ftp
const deployFTP = gulp.series(reset, mainTasks, ftp);

export { deployFTP }

//построение сценариев выполнения задач (series => выполняет построение задач последовательно)
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
//const dev = gulp.series(fonts);

//выполнения сценация по умполчанию
gulp.task('default', dev);
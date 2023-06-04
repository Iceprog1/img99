import { configFTP } from '../config/ftp.js';
import vinylFTP from 'vinyl-ftp';
import util from 'gulp-util';

export const ftp = () => {
	configFTP.log = util.log; // Вывод состояния
	const ftpConnect = vinylFTP.create(configFTP); // Подключение
	return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {})//получаем доступ к папкам и файлам по указаному пути
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				'title': 'FTP',
				'message': "Error: <%= error.message %>"
			}))
		)
		.pipe(ftpConnect.dest(`/${app.path.ftp}`));
}
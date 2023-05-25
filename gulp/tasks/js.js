import webpack from 'webpack-stream';

export const js = () => {
	//получаем доступ к папкам и файлам по указаному пути
	return app.gulp.src(app.path.src.js, { sourcemaps: true })
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				'title': 'JS',
				'message': "Error: <%= error.message %>"
			}))
		)
		.pipe(webpack({
			mode: 'development',
			devtool: false,
			output: {
				filename: 'app.min.js',
			}
		}))
		.pipe(app.gulp.dest(app.path.build.js)) //указываем куда копировать эти файлы
		.pipe(app.plugins.browserSync.stream());
}
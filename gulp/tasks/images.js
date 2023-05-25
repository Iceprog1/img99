import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';

export const images = () => {
	//получаем доступ к папкам и файлам по указаному пути
	return app.gulp.src(app.path.src.images)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				'title': 'IMAGES',
				'message': "Error: <%= error.message %>"
			}))
		)
		.pipe(app.plugins.newer(app.path.build.images))
		.pipe(webp())
		.pipe(app.gulp.dest(app.path.build.images))

		.pipe(app.gulp.src(app.path.src.images))
		.pipe(app.plugins.newer(app.path.build.images))
		.pipe(imagemin({
			interlaced: true,
			svgoPlugins: true,
			interlaced: true,
			optimizationLevel: 5
		}))
		.pipe(app.gulp.dest(app.path.build.images))
		.pipe(app.gulp.src(app.path.src.svg))
		.pipe(app.gulp.dest(app.path.build.images))
		.pipe(app.plugins.browserSync.stream());
}
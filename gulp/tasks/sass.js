import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCss from 'gulp-clean-css';
import webpcss from 'gulp-webpcss';
import autoprefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';

const sassDart = gulpSass(dartSass);

//функция для копирования файлов
export const sass = () => {
	//получаем доступ к папкам и файлам по указаному пути
	return app.gulp.src(app.path.src.sass, { sourcemaps: true })
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				'title': 'Sass',
				'message': "Error: <%= error.message %>"
			}))
		)
		.pipe(app.plugins.replace(/@img\//g, '../img/'))
		.pipe(sassDart({
			outputStyle: 'expanded'
		}))
		.pipe(autoprefixer({	//оптимизирует код под старые браузеры
			grid: true,
			overrideBrowserslist: ['last 3 versions'],
			cascade: true
		}))



		.pipe(groupCssMediaQueries())
		.pipe(webpcss({	//проверяет поддерживает ли браузер webp изображения
			webpClass: '.webp',
			nowebpClass: '.no-webp',
		}))
		.pipe(app.gulp.dest(app.path.build.css)) //создает не сжатый файл css
		.pipe(cleanCss())	//сжимает css файл
		.pipe(rename({
			extname: '.min.css'
		}))
		.pipe(app.gulp.dest(app.path.build.css)) //указываем куда копировать эти файлы
		.pipe(app.plugins.browserSync.stream());
}
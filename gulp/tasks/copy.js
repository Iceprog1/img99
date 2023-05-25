//функция для копирования файлов
export const copy = () => {
   
   return app.gulp.src(app.path.src.files) //получаем доступ к папкам и файлам по указаному пути
      
      .pipe(app.gulp.dest(app.path.build.files)) //указываем куда копировать эти файлы
}
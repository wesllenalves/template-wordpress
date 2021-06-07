import gulp from 'gulp';
import sass from 'gulp-sass';

gulp.task('sass', gulp.series( () => {
    return gulp.src(['node_modules/bootstrap/scss/*.scss', 'src/scss/*.scss'])
    .pipe(sass()) // converter o Sass em CSS
    .pipe(gulp.dest('src/css'));
}));


gulp.task('watch', gulp.series( () => {
    gulp.watch(['node_modules/bootstrap/scss/*.scss', 'src/scss/*.scss'], gulp.parallel(['sass']) );
}));

gulp.task('default', gulp.series(
    ['sass', 'watch']
));
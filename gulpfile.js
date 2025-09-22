import { src, dest, watch } from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import plumber from 'gulp-plumber';
import browserSync from 'browser-sync';

const sass = gulpSass(dartSass);

// funcion que al ejecutarse, crea un documento y compila el css
//despues ejecuta la funcion saas
export function css(done) {
    src('src/scss/app.scss')
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('dist/css'))
        .pipe(browserSync.stream());
    done();
}

// funcion para observar los cambios de los archivos en tiempo real
// con el parametro de gulp --watch
export function dev(done) {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    watch('src/scss/**/*.scss', css);
    watch('./*.html').on('change', browserSync.reload);
    watch('main.js').on('change', browserSync.reload);

    done();
}

const gulp = require('gulp');

// Copiar documentos a dist
gulp.task('docs', function () {
  return gulp.src('docs/**/*')   // de dónde los tomas
    .pipe(gulp.dest('dist/docs')); // a dónde los mandas
});

gulp.task('build', gulp.series('clean', 'html', 'css', 'js', 'docs'));

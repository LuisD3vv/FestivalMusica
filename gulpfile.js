<<<<<<< HEAD
import { src, dest, watch } from 'gulp';
=======
import { src, dest, watch,series} from 'gulp'
// la diferencia de series con parallel es que poararel lo ejecuta todo al mismo tiempo todas las tareas y series una por una
>>>>>>> 1b3d7ea (V1.1)
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import plumber from 'gulp-plumber';
import browserSync from 'browser-sync';

const sass = gulpSass(dartSass);

export function js(done) {
    src ('src/js/app.js')
        .pipe(dest('dist/js'))
    done();
}

// funcion que al ejecutarse, crea un documento y compila el css
//despues ejecuta la funcion saas
<<<<<<< HEAD
export function css(done) {
    src('src/scss/app.scss')
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('dist/css'))
        .pipe(browserSync.stream());
=======
export function css (done) {
    src ('src/scss/app.scss', {sourcemaps:true})
        .pipe( sass().on('error', sass.logError))
        .pipe(dest('dist/css',{sourcemaps:true}));
>>>>>>> 1b3d7ea (V1.1)
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
<<<<<<< HEAD
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
=======
    watch('src/js/**/*.js', js);
}

// arranca las diferentes funciones al inicar gullp
export const build = series (js,css,dev);
>>>>>>> 1b3d7ea (V1.1)

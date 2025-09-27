import { src, dest, watch,series} from 'gulp'
// la diferencia de series con parallel es que poararel lo ejecuta todo al mismo tiempo todas las tareas y series una por una
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';


const sass = gulpSass(dartSass);

export function js(done) {
    src ('src/js/app.js')
        .pipe(dest('dist/js'))
    done();
}

// funcion que al ejecutarse, crea un documento y compila el css
//despues ejecuta la funcion saas
export function css (done) {
    src ('src/scss/app.scss', {sourcemaps:true})
        .pipe( sass().on('error', sass.logError))
        .pipe(dest('dist/css',{sourcemaps:true}));
    done();
}
// funcion para observar los cambios de los archivos en tiempo real
// con el parametro de gulp --watch
export function dev(){
    watch('src/scss/**/*.scss', css);
    watch('src/js/**/*.js', js);
}

// arranca las diferentes funciones al inicar gullp
export const build =series (js,css,dev);

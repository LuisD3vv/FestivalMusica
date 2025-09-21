import { src, dest, watch } from 'gulp'
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';


const sass = gulpSass(dartSass);

// funcion que al ejecutarse, crea un documento y compila el css
//despues ejecuta la funcion saas
export function css (done) {
    src ('src/scss/app.scss')
        .pipe( sass().on('error', sass.logError))
        .pipe(dest('dist/css'));
    done();
}
// funcion para observar los cambios de los archivos en tiempo real
// con el parametro de gulp --watch
export function dev(){
    watch('src/scss/**/*.scss', css);

}

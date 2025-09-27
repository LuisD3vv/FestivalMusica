document.addEventListener('DOMContentLoaded', function () {
    crearGalerias()
})

function crearGalerias() {
    console.log("Desde crear galeria")
    const galeria = document.querySelector('.galeria-imagenes');

    const loop = 16;

    for(let i=1;i<= loop;i++){
        console.log(i)
        const imagen = document.createElement('IMG');
        imagen.src = `src/img/gallery/full/${i}.jpg`;
        imagen.alt = 'Imagen galeria';
        console.log(imagen);

        // Event Handler

        imagen.onclick= function () {
            mostrarImagen(i);
        }
        galeria.appendChild(imagen);

    }
}

function mostrarImagen(i) {
    const imagen = document.createElement('IMG');
    imagen.src = `src/img/gallery/full/${i}.jpg`;
    imagen.alt = 'Imagen galeria';
    console.log(imagen);
    // general modal
    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.onclick = cerrarModal

    //  Boton para cerrar el modal
    const cerrarModalbtn = document.createElement('BUTTTON');
    cerrarModalbtn.textContent = 'cerrar'
    cerrarModalbtn.classList.add('btn-cerrar')
    cerrarModalbtn.onclick = cerrarModal

    modal.appendChild(imagen);
    modal.appendChild(cerrarModalbtn);

    // agregar al html
    const body = document.querySelector('body');
    body.classList.add('overflow-hidden');
    body.appendChild(modal);
}

function cerrarModal(){
    const modal = document.querySelector('.modal');
    modal.classList.add('.fade-out');
    setTimeout(()=> {
        modal?.remove();
        const body = document.querySelector('body');
        body.classList.remove('overflow-hidden');
    },500);
}
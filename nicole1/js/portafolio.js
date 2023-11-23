const imagenes = document.querySelectorAll('.img-galeria')
const imagenesligth = document.querySelector('.agregar-imagen')
const contenedorligth = document.querySelector('.imagen-light')
const lenin1 = document.querySelector('lenin')


imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        aparecerimagen(imagen.getAttribute('src'))
    });
});

contenedorligth.addEventListener('click', (e) => {
    if ( e.target !== imagenesligth ) {
        contenedorligth.classList.toggle('show')
        imagenesligth.classList.toggle('showimagen')
        lenin1.style.opacity = "1"
    }
});


const aparecerimagen = (imagen) => {
    imagenesligth.src = imagen;
    contenedorligth.classList.toggle('show')
    contenedorligth.classList.toggle('showimagen')
    lenin1.style.opacity = "0"
}
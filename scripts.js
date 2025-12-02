
let slideIndex = 0;

// showSlides();

// function showSlides() {
//     let i;
//     let slides = document.getElementsByClassName("mySlide");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1 }
//     slides[slideIndex - 1].style.display = "block";
//     setTimeout(showSlides, 2000); // Change image every 2 seconds
// };



function secciones(seccionId) {

    const secciones = document.querySelectorAll('section');
    secciones.forEach(seccion => {
        seccion.style.display = 'none';
    });

    if (seccionId == 'productos')
        document.getElementById(seccionId).style.display = 'block';

    else
        document.getElementById(seccionId).style.display = 'grid';
}

function mostrarProductos(categoria) {
    const todosProductos = document.querySelectorAll('.caja-producto');


    todosProductos.forEach(producto => {
        producto.style.display = 'none';
    });


    if (categoria === '.all') {
        todosProductos.forEach(producto => {
            producto.style.display = 'inline-block';
        });
    } else {

        const productosFiltrados = document.querySelectorAll(categoria);
        productosFiltrados.forEach(producto => {
            producto.style.display = 'inline-block';
        });
    }
}


window.open("https://ejemplo.com");
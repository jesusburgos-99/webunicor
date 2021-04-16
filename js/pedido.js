const carro = new Carrito();
const carrito = document.getElementById('carrito');
const productos = document.getElementById('enumerarprodu');
const listaProductos = document.querySelector('#listascarro tbody');
const vaciarCarritoBtn = document.getElementById('eliminarcarro');
//Jesus Burgos Huertas - Unicor

cAcciones();

function cAcciones(){

    //al oprimir agregar al carro
    productos.addEventListener('click', (e)=>{carro.anadirProducto(e)});

    //al eliminar productos del carro
    carrito.addEventListener('click', (e)=>{carro.eliminarProducto(e)});

    //Al presionar para vaciar el carro
    vaciarCarritoBtn.addEventListener('click', (e)=>{carro.vaciarCarrito(e)});

    //almacenar en LS
    document.addEventListener('DOMContentLoaded', carro.leerLocalStorage());

    
}
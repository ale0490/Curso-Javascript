let listaProductos = [];
let carritoProductos = [];
let pagar = 0;

function cargarCarritoDeLocalStorage () {
    if (localStorage.getItem('carrito') !== null) {
        carritoCompras = JSON.parse(localStorage.getItem('carrito'));
    }
};

function carrito() {
    actualizarCarrito();
    pagar = 0;
}

async function crearListaProductos(){
    cargarCarritoDeLocalStorage();
    const resPasteleria = await fetch("pasteleria.json")
    const pasteleria = await resPasteleria.json();

    const resPasnificado = await fetch("panificados.json")
    const panificados = await resPasnificado.json();

    listaProductos = [...pasteleria, ...panificados];

    carritoCompras.forEach((item)=> {
        
        listaProductos.filter((info) => {
            //compara las id y devuelve el objeto.
            if (info.id == parseInt(item)) {
               productos = info
            }
        });
        carritoProductos.push(productos)
    });
};

async function actualizarCarrito(){

    await crearListaProductos();

    itemsDom.textContent = "";
    const carritoSinDuplicados = [...new Set(carritoCompras)];
    
    carritoSinDuplicados.forEach((item) => {
        // busqueda del producto
        const miItem = listaProductos.filter((torta) => {
            //compara las id.
            return torta.id == parseInt(item);
        });
        const cantidadUnidades = carritoCompras.reduce((total, propiedadId) => {
            // cohincide la ID? sumar+1, sino se mantiene.
            return propiedadId === item ? total += 1 : total;
        }, 0);
        //creacion del item en el carrito.
        const li = document.createElement("li");
        li.classList.add('lista-carrito'); 
        itemsDom.appendChild(li);
        
        const divTexto = document.createElement ("div");
        divTexto.classList.add ("texto-carrito");
        li.appendChild(divTexto);

        const h3 = document.createElement("h3");
        h3.textContent = cantidadUnidades+ " x "+ miItem[0].nombre
        divTexto.appendChild(h3);

        const divImagen = document.createElement ("div");
        divImagen.classList.add ("imagen");
        li.appendChild(divImagen);

        const imagenCarrito = document.createElement("img");
        imagenCarrito.classList.add ("imagen-carrito");
        imagenCarrito.src = miItem[0].imagen;
        divImagen.appendChild(imagenCarrito);

        const divPrecio = document.createElement("div");
        divPrecio.classList.add ("texto-carrito");
        li.appendChild(divPrecio);

        const precioTexto = document.createElement("p");
        precioTexto.classList.add("precio-carrito");
        precioTexto.textContent = "$ " + miItem[0].precio*cantidadUnidades;
        divPrecio.appendChild(precioTexto);

        // crea boton eliminar
        const eliminar = document.createElement('button');
        eliminar.classList.add('btn');
        eliminar.textContent = 'X';
        eliminar.dataset.item = item;
        eliminar.addEventListener('click', borrarItemCarrito);
        li.appendChild(eliminar);
    });
    /*
    pagar = carritoProductos.reduce((subtotal, item) => {
        const miItem = listaProductos.filter((producto) => {
            return producto.id == parseInt(item.id)
        });
       return subtotal + parseInt(miItem[0].precio)
    },0);*/

    pagar = calcularTotal();

    const divTotal = document.createElement("div");
    divTotal.classList.add("div-total");
    itemsDom.appendChild(divTotal);

    const divVacio = document.createElement("div");
    divTotal.appendChild(divVacio);

    const divPagar = document.createElement("div");
    divPagar.classList.add("div-pagar");
    divTotal.appendChild(divPagar);

    const totalTexto = document.createElement("p");
    totalTexto.textContent = "Total: ";
    totalTexto.classList.add ("texto-total");
    divPagar.appendChild(totalTexto);

    const totalPrecio = document.createElement("p");
    totalPrecio.classList.add ("texto-total");
    totalPrecio.textContent = "$ " + pagar; //calcularTotal();
    divPagar.appendChild(totalPrecio);
};

function calcularTotal(){
    
    return carritoProductos.reduce((subtotal, item) => {
        const miItem = listaProductos.filter((producto) => {
            return producto.id == parseInt(item.id)
        });
       return subtotal + parseInt(miItem[0].precio)
    }, 0);
}

function borrarItemCarrito(e) {

    Swal.fire({
        title: '¿Eliminar del carrito?',
        text: "¿Esta seguro que desea eliminar este producto?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'ELIMINAR'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
            'Eliminado',
            'El producto ha sido borrado',
            'success'
            )
        const id = e.target.dataset.item;
        carritoCompras = carritoCompras.filter((carritoId) => {
        return carritoId !== id;
        });
        actualizarLocalStorage();
        }
        actualizarCarrito();
    });
}
function actualizarLocalStorage () {
    localStorage.setItem('carrito', JSON.stringify(carritoCompras));
}
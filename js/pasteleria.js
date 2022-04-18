async function pasteleriaHtml (){

    const res = await fetch("pasteleria.json")
    const pasteleria = await res.json()
    cargarCarritoDeLocalStorage();

    //H2
    const h2Pasteleria = document.createElement ("h2");
    h2Pasteleria.textContent = "Nuestra Pasteleria";
    itemsDom.appendChild(h2Pasteleria);

    const divProductos = document.createElement("div");
    divProductos.classList.add("div-productos");
    itemsDom.appendChild(divProductos);
    
    i=1;
    pasteleria.forEach((info) => {
        const divContenedor = document.createElement ("div");
        divContenedor.classList.add("contenedor");
        divProductos.appendChild(divContenedor);
            
        const tituloProducto = document.createElement("h3");
        tituloProducto.textContent = info.nombre;
        divContenedor.appendChild(tituloProducto);
            
        const imagenProducto = document.createElement("img");
        imagenProducto.classList.add("imagen-producto");
        imagenProducto.src = info.imagen;
        imagenProducto.setAttribute("alt", "Torta");
        divContenedor.appendChild(imagenProducto);

        const valor = document.createElement("p");
        valor.classList.add ("precio-producto");
        valor.textContent = "$ " + info.precio;
        divContenedor.appendChild(valor);

        const boton = document.createElement ("button");
        boton.textContent = "Agregar";
        boton.classList.add("boton-agregar");
        boton.setAttribute("id", info.id);
        boton.addEventListener(`click`, agregarAlCarrito);
        divContenedor.appendChild(boton);
        i++;
    });
    
    const pieBody = document.createElement("p");
    pieBody.classList.add("section-p");
    pieBody.textContent = "Todos nuestros productos son elaboracion 100% artesanal";
    itemsDom.appendChild(pieBody);
};

function agregarAlCarrito(e){
    carritoCompras.push(e.target.getAttribute('id'));
    guardarCarritoEnLocalStorage();
}
function guardarCarritoEnLocalStorage () {
    localStorage.setItem('carrito', JSON.stringify(carritoCompras));
}
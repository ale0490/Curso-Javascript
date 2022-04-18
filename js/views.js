const homeView = () => {
    const vista = home();
    return vista;
};

const pasteleriaView = () => {
    const vista = pasteleriaHtml();
    return vista;
};

const panificadosView = () => {
    const vista = panificadosHtml();
    return vista;
};

const somosView = () => {
    const vista = somos();
    return vista;
};

const contactoView = () => {
    const vista = contacto();
    return vista;
};

const carritoView = () => {
    const vista = carrito();
    return vista;
};

const itemsDom = document.querySelector(".views");
let carritoCompras = [];

class Producto {
    constructor(id, nombre, precio, imagen, redireccion) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.url = imagen;
        this.ref = redireccion
    }
};
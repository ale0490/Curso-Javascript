//objeto y arrays
const objeto1 = new Producto (01, "Pasteleria", 0, "imagenes/tortas/frutilla.webp", "index.html#/pasteleria");
const objeto2 = new Producto (02, "Alfajores", 0,"imagenes/alfajores/alfajor2.webp", "index.html#/pasteleria");
const objeto3 = new Producto (03, "Chocolates", 0,"imagenes/alfajores/tableta.webp", "index.html#/pasteleria");
const objeto4 = new Producto (04, "Tartas", 0,"imagenes/tortas/pastafrola-batata.webp", "index.html#/pasteleria");
const objeto5 = new Producto (05, "Muffin & cupcakes", 0,"imagenes/tortas/muffin.webp", "index.html#/pasteleria");
const objeto6 = new Producto (06, "Panificados", 0,"imagenes/panificados/medialunas.webp", "index.html#/panificados");
const grupo1 = [objeto1, objeto2, objeto3];
const grupo2 = [objeto4, objeto5, objeto6];
const ImagenesIndexArray = [grupo1, grupo2];

function home (){ 
    i=0;    
    //H2
    const h2 = document.createElement ("h2");
    h2.textContent = "Nuestros Productos";
    itemsDom.appendChild(h2);

    ImagenesIndexArray.forEach((array) => {

        //Div contenedor de imagenes con redireccion
        const divProductos = document.createElement ("div");
        divProductos.classList.add("div-productos-home");
        divProductos.setAttribute("id", [i])
        
        itemsDom.appendChild(divProductos);
        
        array.forEach((info) =>{
            const divProductosDOM = document.querySelectorAll (".div-productos-home")[i];
            //Redireccionamiento 
            const redireccion = document.createElement("a");
            redireccion.href = info.ref;
            //Div 
            const divImagen = document.createElement("div");
            //Titulo
            const h3 = document.createElement ("h3");
                    h3.textContent = info.nombre;
            //Imagen
            const imagenInicio = document.createElement ("img");
                imagenInicio.classList.add("imagen-producto");
                imagenInicio.src = info.url;

            divProductosDOM.appendChild(redireccion);
            redireccion.appendChild(divImagen);
            divImagen.appendChild(h3);
            divImagen.appendChild(imagenInicio);
            });
        i++;   
    });

    const pieBody = document.createElement("p");
    pieBody.classList.add("section-p");
    pieBody.textContent = "Todos nuestros productos son elaboracion 100% artesanal";
    itemsDom.appendChild(pieBody);
};
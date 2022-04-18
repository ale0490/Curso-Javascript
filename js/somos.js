function somos(){

    const h2 = document.createElement ("h2");
    h2.textContent = "Acerca de nosotros";
    itemsDom.appendChild(h2);

    const divSomos = document.createElement("div");
    divSomos.classList.add("quienes-somos");
    itemsDom.appendChild(divSomos);

    const imagenSomos = document.createElement("img");
    imagenSomos.classList.add("imagen-somos");
    imagenSomos.src = "imagenes/decorando2.webp";
    divSomos.appendChild(imagenSomos);

    const divDescripcion = document.createElement("div");
    divDescripcion.classList.add("descripcion");
    divSomos.appendChild(divDescripcion);

    const descripcion = document.createElement("p");
    descripcion.classList.add("texto-descripcion");
    descripcion.innerHTML = `Somos un emprendimiento dedicado a la Pastelería Artesanal que comenzó en el año 2015, que en un
    principio se especializó únicamente en tortas, pero hoy, cuenta con una gran variedad de productos.
    </br>
    </br>
    Desde siempre tuvimos en claro que nuestra pastelería debería tener atributos que la hicieran única:
    productos de <strong>excelente calidad</strong> y sabores únicos, totalmente <strong>artesanal</strong> sin conservantes, combinando técnicas tanto antiguas como modernas, sabores de ayer y de hoy, siempre en búsqueda de la perfeccion.
    </br>
    </br>
    Contamos con un staff altamente calificado para poder enfrentar cualquier desafio que el cliente nos
    proponga, logrando siempre conservar la mas alta calidad y diseño en nuestros productos./n
    Esta contínua busqueda e incontables cambios nos convirtio en una de las pastelerias preferidas y mas
    buscadas, posicionandonos entre las <strong>mejores de Buenos Aires</strong>.`;
    divDescripcion.appendChild(descripcion);
};
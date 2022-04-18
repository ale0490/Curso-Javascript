window.addEventListener(`hashchange`, ()=> {
    router(window.location.hash);
});

let contenido = document.getElementById(`views`);

const router = (hash) => {
    contenido.innerHTML = "";
    switch (hash){
        case `#/`:{
            (homeView());
            return console.log("Home");
        };
        case `#/pasteleria`:{
            (pasteleriaView());
            return console.log("Pasteleria");
        };
        case `#/panificados`:{
            (panificadosView());
            return console.log("Panificados");
        };
        case `#/quienes-somos`:{
            (somosView());
            return console.log("Quienes somos");
        };
        case `#/contacto`:{
            (contactoView());
            return console.log ("Contacto");
        };
        case `#/carrito`:{
            (carritoView());
            return console.log ("Carrito");
        };
        default :
        (error());
        return console.log ("404, not found");
    };
};
function contacto(){

  //H2
  const h2 = document.createElement ("h2");
  h2.textContent = "Contacto";
  itemsDom.appendChild(h2);

  const divContacto = document.createElement("div");
  divContacto.classList.add("section-contact");
  itemsDom.appendChild(divContacto);

  //Telefono
  const divtelefono = document.createElement("div");
  divtelefono.classList.add("contacto");
  divContacto.appendChild(divtelefono);

  const imagenTelefono = document.createElement("img");
  imagenTelefono.src = "imagenes/contacto/telefono.png";
  divtelefono.appendChild(imagenTelefono);

  const telefono = document.createElement("p");
  telefono.classList.add("datos");
  telefono.textContent = "1154321001";
  divtelefono.appendChild(telefono);

  //Email
  const divEmail = document.createElement("div");
  divEmail.classList.add("contacto");
  divContacto.appendChild(divEmail);

  const imagenEmail = document.createElement("img");
  imagenEmail.src = "imagenes/contacto/email.png";
  divEmail.appendChild(imagenEmail);

  const email = document.createElement("p");
  email.classList.add("datos");
  email.textContent = "lastortasdebrenda@gmail.com";
  divEmail.appendChild(email);

  //FORM
  const formContacto = document.createElement("form");
  divContacto.appendChild(formContacto);

  const divForm = document.createElement("div");
  divForm.classList.add("row", "justify-content-center");
  formContacto.appendChild(divForm);

  //Form nombre
  const label = document.createElement("label");
  label.setAttribute("for", "colFormLabelLg");
  label.classList.add("col-sm-2", "col-form-label", "col-form-label-lg");
  label.textContent = "Nombre:";
  divForm.appendChild(label);

  const divInputNombre = document.createElement("div");
  divInputNombre.classList.add("col-sm-10");
  divForm.appendChild(divInputNombre);

  const inputNombre = document.createElement("input");
  inputNombre.classList.add("form-control", "form-control-lg");
  inputNombre.setAttribute("id" , "colFormLabelLg");
  inputNombre.setAttribute("placeholder" , "Nombre");
  inputNombre.setAttribute("type", "text");
  divInputNombre.appendChild(inputNombre);

  //Form Apellido
  const labelApellido = document.createElement("label");
  labelApellido.setAttribute("for", "colFormLabelLg");
  labelApellido.classList.add("col-sm-2", "col-form-label", "col-form-label-lg");
  labelApellido.textContent = "Apellido:";
  divForm.appendChild(labelApellido);

  const divInputApeliido = document.createElement("div");
  divInputApeliido.classList.add("col-sm-10");
  divForm.appendChild(divInputApeliido);

  const inputApellido = document.createElement("input");
  inputApellido.classList.add("form-control", "form-control-lg");
  inputApellido.setAttribute("id" , "colFormLabelLg");
  inputApellido.setAttribute("placeholder" , "Apellido");
  inputApellido.setAttribute("type", "text");
  divInputApeliido.appendChild(inputApellido);

  //Form Telefono
  const labelTelefono = document.createElement("label");
  labelTelefono.setAttribute("for", "colFormLabelLg");
  labelTelefono.classList.add("col-sm-2", "col-form-label", "col-form-label-lg");
  labelTelefono.textContent = "Telefono:";
  divForm.appendChild(labelTelefono);

  const divInputTelefono = document.createElement("div");
  divInputTelefono.classList.add("col-sm-10");
  divForm.appendChild(divInputTelefono);

  const inputTelefono = document.createElement("input");
  inputTelefono.classList.add("form-control", "form-control-lg");
  inputTelefono.setAttribute("id" , "colFormLabelLg");
  inputTelefono.setAttribute("placeholder" , "Telefono");
  inputTelefono.setAttribute("type", "text");
  divInputTelefono.appendChild(inputTelefono);

  //Form Email
  const labelEmail = document.createElement("label");
  labelEmail.setAttribute("for", "colFormLabelLg");
  labelEmail.classList.add("col-sm-2", "col-form-label", "col-form-label-lg");
  labelEmail.textContent = "Email:";
  divForm.appendChild(labelEmail);

  const divInputEmail = document.createElement("div");
  divInputEmail.classList.add("col-sm-10");
  divForm.appendChild(divInputEmail);

  const inputEmail = document.createElement("input");
  inputEmail.classList.add("form-control", "form-control-lg");
  inputEmail.setAttribute("id" , "colFormLabelLg");
  inputEmail.setAttribute("placeholder" , "Email");
  inputEmail.setAttribute("type", "Email");
  divInputEmail.appendChild(inputEmail);

  //Form Parrafo
  const labelParrafo = document.createElement("label");
  labelParrafo.setAttribute("for", "colFormLabelLg");
  labelParrafo.classList.add("col-sm-2", "col-form-label", "col-form-label-lg");
  labelParrafo.textContent = "Mensaje:";
  divForm.appendChild(labelParrafo);

  const divInputParrafo = document.createElement("div");
  divInputParrafo.classList.add("col-sm-10");
  divForm.appendChild(divInputParrafo);

  const inputParrafo = document.createElement("textarea");
  inputParrafo.classList.add("form-control", "form-control-lg");
  inputParrafo.setAttribute("placeholder" , "Ingrese su consulta o sugerencia");
  inputParrafo.setAttribute("row", "2");
  divInputParrafo.appendChild(inputParrafo);

  const divVacio = document.createElement("div");
  divForm.appendChild(divVacio);

  //Form Enviar
  const divInputEnviar = document.createElement("div");
  divForm.appendChild(divInputEnviar);

  const inputEnviar = document.createElement("input");
  inputEnviar.classList.add("enviar");
  inputEnviar.setAttribute("type", "submit");
  inputEnviar.setAttribute("value", "Enviar");
  inputEnviar.addEventListener(`click`, alertaTostadita);
  divInputEnviar.appendChild(inputEnviar);
};

function alertaTostadita() {
    Toastify({
        text: "Mensaje Enviado",
        duration: 3000,
        close: true,
        gravity: "bottom",
        position: "right",
        style: {
          background: "#94e30b",
          color: "#000000",
        },
      }).showToast();
}
export function valida(input) {
    const tipoDeInput = input.dataset.tipo;    
  
    if (input.validity.valid) {
      input.parentElement.classList.add("formcontato__formulario--invalid");
      input.parentElement.querySelector(".span-error").innerHTML = "";
    } else{
      input.parentElement.classList.remove("formcontato__formulario--invalid");
      input.parentElement.querySelector(".span-error").innerHTML =
        mostrarMensajeDeError(tipoDeInput, input);
    };
  }
  
  const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
  ];
  
  const mensajesDeError ={
      nombre: {
        valueMissing: "¡ el campo nombre no puede estar vacio !",
        patternMismatch: "¡ No debe contener caracteres especiales !", 
      },
      email: {
        valueMissing: "el campo correo no puede estar vacio !",
        typeMismatch: "¡ el correo no es valido !",
      },
      asunto: {
        valueMissing: "¡ el campo asunto no puede estar vacio !",
        patternMismatch: "¡ No debe contener caracteres especiales !",
      },
    mensaje: {
        valueMissing: "¡ el mensaje no puede estar vacio !",
        patternMismatch: "¡ No debe contener caracteres especiales !",
    },
  };
  
  function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
  tipoDeErrores.forEach((error) => {
    if(input.validity[error]) {
    console.log(tipoDeInput, error);
    console.log(input.validity[error]);
    console.log(mensajesDeError[tipoDeInput][error]);
    mensaje = mensajesDeError[tipoDeInput][error];
    }
  });
    return mensaje
  }
  
let listaDeAmigos = [];

/////funcion que valida la entrada de nombres/////
function validarAmigo(nombre) {
  const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/;
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return false;
  } else if (!regexNombre.test(nombre)) {
    alert(
      "El nombre ingresado no es válido. Por favor, ingresa solo letras y espacios."
    );
    return false;
  } //else console.log(nombre);
  else return true;
}

/// funcion adicional para verificar que el nombre no se encuentre repetido en la lista //

function nombreRepetido(nombre) {
  return listaDeAmigos.includes(nombre);
}

// funcion para limpiar la entrada de amigos
function limpiarEntrada() {
  document.getElementById("amigo").value = "";
}

function agregarAmigo() {
  const nombre = document.getElementById("amigo").value.trim();

  if (validarAmigo(nombre)) {
    // si el nombre es valido reviso que no este repetido y limpio la caja de texto
    if (nombreRepetido(nombre)) {
      alert("el nombre ingresado ya se encuentra en la lista");
    } else {
      //Añado el nombre a la lista y limpio la entrada
      listaDeAmigos.push(nombre);
      //console.log(listaDeAmigos);
      limpiarEntrada();
    }
  }
}

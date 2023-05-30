// Lista de caracteristicas especiales
var expreciones = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~ÑñÖóáéíúÁÉÍÓÚ]/;
function encriptar_texto() {
    var mensaje = document.querySelector("#mensaje").value;
    if (expreciones.test(mensaje)) {
        alert("Error el mensaje contine caracteres especiales !!!")
    } else {
        // convierte en cadena
        var data = mensaje.split('');
        // recorre el arreglo
        for (var i = 0; i <= data.length; i++) {
            switch (data[i]) {
                case 'a':
                    data[i] = "ai";
                    break;
                case 'e':
                    data[i] = "enter";
                    break;
                case 'i':
                    data[i] = "imes";
                    break;
                case 'o':
                    data[i] = "ober";
                    break;
                case 'u':
                    data[i] = "ufat";
                    break;
            }
        }
        //array a string
        var nuevo_mensaje = data.join('');
        mostrar_mensaje(nuevo_mensaje);
    }
}

function desencriptar_texto() {
    var mensaje = document.querySelector("#mensaje").value;
    if (expreciones.test(mensaje)) {
        alert("Error el mensaje contine caracteres especiales !!!")
    } else {

        var cambio = mensaje.replace(/ai/g, "a")
        cambio = cambio.replace(/enter/g, "e");
        cambio = cambio.replace(/imes/g, "i");
        cambio = cambio.replace(/ober/g, "o");
        cambio = cambio.replace(/ufat/g, "u");
        mostrar_mensaje(cambio);
    }
}

function mostrar_mensaje(nuevo_mensaje) {
    var ocultar = document.getElementById("sin-datos");
    var mostrar = document.getElementById("con-datos");
    if (nuevo_mensaje.length != 0) {
        ocultar.style.height = 0 + "%";
        ocultar.style.opacity = 0;
        ocultar.style.overflow = "hidden";
        ocultar.style.position = "absolute";
        mostrar.style.height = 100 + "%";
        mostrar.style.opacity = 1;
        mostrar.style.overflow = "initial";
        mostrar.style.position = "initial";
        var mensaje = document.getElementById("resultado-del-encriptado").value = nuevo_mensaje;
    } else {
        alert("Ingresa un texto");
        ocultar.style.height = 100 + "%";
        ocultar.style.opacity = 1;
        mostrar.style.height = 0 + "%";
        mostrar.style.opacity = 0;
    }
}

function copy() {
    var mensaje = document.querySelector("#resultado-del-encriptado");
    navigator.clipboard.writeText(mensaje.value);
    alert("Mensaje copiado");
}
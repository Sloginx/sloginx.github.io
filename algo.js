let areaT = document.getElementById("textoU");

function eliminartextos(){
    document.getElementById("contenedor-texto").style.display = 'none';
    document.getElementById("con-boton").style.display = 'block';
    document.getElementById("textoE").style.display = 'block';
}

function aparecertextos(){
    document.getElementById("contenedor-texto").style.display = 'block';
    document.getElementById("con-boton").style.display = 'none';
    document.getElementById("textoE").style.display = 'none';
}

function encriptar () {
    let texto = areaT.value;
    if(/^[a-z-ñ\s]+$/.test(texto)){
        texto = texto.replace(/a/g, 'a-'); // Agrega un carácter * después de la letra "a" que no ha sido reemplazada por "ai"
        texto = texto.replace(/e/g, 'enter');
        texto = texto.replace(/i/g, 'imes');
        texto = texto.replace(/o/g, 'ober');
        texto = texto.replace(/u/g, 'ufat');
        texto = texto.replace(/a-/g, 'ai'); // Utiliza una expresión regular diferente para reemplazar solo la letra "a" que no ha sido reemplazada anteriormente por "ai"
        let resultado = document.getElementById("textoE");
        resultado.innerHTML = texto;
        areaT.value = "";
        eliminartextos();
    }
    else if (texto == ""){
      alert("Aún no has escrito nada");
    }
    else{
        alert('Solo letras minusculas y sin acento');
    }
    }
function desencriptar (){
  if(/^[a-z-ñ\s]+$/.test(texto)){
        let texto = areaT.value;
        texto = texto.replace(/ai/g, 'a');
        texto = texto.replace(/enter/g, 'e');
        texto = texto.replace(/imes/g, 'i');
        texto = texto.replace(/ober/g, 'o');
        texto = texto.replace(/ufat/g, 'u');
        let resultado = document.getElementById("textoE");
        resultado.innerHTML = texto;
        areaT.value = "";
        eliminartextos();
  }
  else{
    alert('Solo letras minusculas y sin acento');
}
}

function copiar() {
    let resultado = document.getElementById("textoE");
  
    // Crear un elemento de texto temporal y asignarle el valor del resultado
    let tempInput = document.createElement("input");
    tempInput.style.position = "fixed";
    tempInput.style.opacity = 0;
    tempInput.value = resultado.innerHTML;
    document.body.appendChild(tempInput);
  
    // Seleccionar el texto dentro del elemento de texto temporal
    tempInput.select();
    tempInput.setSelectionRange(0, tempInput.value.length);
  
    // Verificar si el comando de copia es compatible
    if (document.queryCommandSupported("copy")) {
      try {
        // Ejecutar el comando de copia
        document.execCommand("copy");
      } catch (error) {
        console.error("Error al copiar el texto", error);
      }
    }
    // Eliminar el elemento de texto temporal
    document.body.removeChild(tempInput);
    aparecertextos();
  }
  

document.getElementById("botonE").addEventListener("click", encriptar);
document.getElementById("botonD").addEventListener("click", desencriptar);
document.getElementById("boton-copiar").addEventListener("click", copiar);
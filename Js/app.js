function alertar() {
  alert('Este boton llama a la Funcion "Alertar"');
}
function suma() {
  let numberone = document.getElementById("imputej3a").value;
  let numbertwo = document.getElementById("imputej3b").value;
  let sumar = (parseFloat(numberone) + parseFloat(numbertwo));
  alert("El resultado de la suma es :" + sumar + ".");
}
function devolvertxt() {
  let textoingresado = document.getElementById("imputej4a").value;
  alert("Ingresaste el siguiente texto :" + textoingresado + ".");
}
function suma2() {
  let ingreso1 = prompt("Escribe el primer numero");
  let ingreso2 = prompt("Escribe el segundo numero");
  alert("El resultado de la suma es :" + (parseFloat(ingreso1) + parseFloat(ingreso2)) + ".");
}

function comparar() {
    let valor1 =  document.getElementById("imputej6a").value;
    let valor2 =  document.getElementById("imputej6b").value;
  if (valor1 > valor2) {
    alert("El valor mas alto es :" + valor1 + ".");
} else {
  alert("El valor mas alto es :" + valor2 + ".");
}
}
function comparar2() {
  let ingreso1a = document.getElementById("imputej7a").value;
  let ingreso2a = document.getElementById("imputej7b").value;
  let ingreso3a = document.getElementById("imputej7c").value;
if (ingreso1a > ingreso2a) {
  if (ingreso1a > ingreso3) {
    alert("El valor mas alto es :" + ingreso1a + ".");
  } else {
    alert("El valor mas alto es :" + ingreso3a + ".");
  }
} else {
  if (ingreso2a > ingreso3a) {
    alert("El valor mas alto es :" + ingreso2a + ".");
} else {
  alert("El valor mas alto es :" + ingreso3a + ".");
}
  
}
}
function divi2() {
  let ingreso = document.getElementById("imputej8a").value;
if (ingreso %2 == 0) {
      alert("El numero es divisible por 2.");
} else {
      alert("El numero NO es divisible por 2.");
}
}
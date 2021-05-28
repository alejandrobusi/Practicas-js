function alertar() {
  alert('Este boton llama a la Funcion "Alertar"');
}
function Suma() {
  let numberone = document.getElementById("imputej3a").value;
  let numbertwo = document.getElementById("imputej3b").value;
  let sumar = (parseInt(numberone) + parseInt(numbertwo));
  alert("El resultado de la suma es " + sumar);
}

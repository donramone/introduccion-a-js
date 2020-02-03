
const $inputCantidad = document.querySelector("#input-cantitad");
const $btnAceptar = document.querySelector("#btn-aceptar");
const $btnCalcular = document.querySelector("#btn-calcular");
const $btnReset = document.querySelector("#btn-reset");

$btnAceptar.onclick = function(){

  const inputCantidad = Number($inputCantidad.value);
  if (inputCantidad > 0) {
    removeInputAgesFamily();
    //showBtnCalcular();
    showElement("btn-calcular");
    addFamiliar($inputCantidad.value);
    removeBtnAceptar();
    event.preventDefault();

  }
}

$btnCalcular.onclick = function(){
 
    const ages = getAges();
    if (ages.length > 0) {
      showAges('max',  getMaxAge(ages));
      showAges('min',  getMinAge(ages));
      showAges('avg',  getAverage(ages));
      showStatics();
    }
   
}

$btnReset.onclick= function(){
  removeInputAgesFamily();
  removeBtnCalcular()
  removeStatics();
  showBtnAceptar();
}

function addFamiliar(cantidadFamiliar){
    for (let index = 0; index < cantidadFamiliar; index++) {
        createInputAgesFamily();
    }
}



function createInputAgesFamily(){

  const $myDiv = document.createElement('div');
    $myDiv.className = "staticIntegrante";

    const $myLabel = document.createElement('label');
    $myLabel.textContent = "Edad: ";

    const $myInput = document.createElement('input');
    $myInput.type = 'number'

    $myDiv.appendChild($myLabel);
    $myDiv.appendChild($myInput);

    const $integrantes = document.querySelector('#integrantes');
    $integrantes.appendChild($myDiv);
    
}
function removeInputAgesFamily(){
  const $inputIntegrantes = document.querySelectorAll(".staticIntegrante");
    
    for(let i=0;i < $inputIntegrantes.length ;i++){
      $inputIntegrantes[i].remove();
    }
  }
/*
function showBtnCalcular() {
  document.querySelector("#calcular").className = "";

}
*/
function showStatics() {
  document.querySelector('#statics').className = '';
}
function showBtnCalcular() {
  document.querySelector('#btn-calcular').className = '';
}
function showElement(typeElement){
  document.querySelector(`#${typeElement}`).className = '';
}

function showBtnAceptar() {
  document.querySelector('#btn-aceptar').className = '';
}

function removeBtnCalcular(){
 
  document.querySelector("#btn-calcular").className = "oculto";
}

function removeBtnAceptar(){
  document.querySelector("#btn-aceptar").className = "oculto";
}

function removeStatics(){
  document.querySelector('#statics').className = 'oculto';
}

function showAges(tipo, valor) {
  document.querySelector(`#${tipo}-age`).textContent = valor;
}

function getMaxAge(ages){
    let max = ages[0];
    for (let i = 1; i < ages.length; i++) {
      if (ages[i] > max) {
        max = ages[i];
      }
    }
    return max;
}

function getMinAge(ages){
    let min = ages[0];
    for (let i = 1; i < ages.length; i++) {
      if (ages[i] < min) {
        min = ages[i];
      }
    }
    return min;
}

function getAverage(ages){
  let total=0;
  for (let i = 0; i < ages.length; i++) {
    total += ages[i]
  }
  return (total / ages.length).toFixed(2);
}

function getAges() {
  const $integrantes = document.querySelectorAll(".staticIntegrante input");
  const edades = [];
  for (let i = 0; i < $integrantes.length; i++) {
    edades.push(Number($integrantes[i].value));
  }
  return edades;
}
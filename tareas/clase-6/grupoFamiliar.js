
const $inputCantidad = document.querySelector("#input-cantitad");
const $btnAceptar = document.querySelector("#btn-aceptar");
const $btnCalcular = document.querySelector("#btn-calcular");
const $btnReset = document.querySelector("#btn-reset");

$btnAceptar.onclick = function(){
const inputCantidad = Number($inputCantidad.value);

  if (inputCantidad > 0) {
    showElement("btn-calcular");
    hideElement("btn-aceptar");
    addFamiliar($inputCantidad.value);
  }
  event.preventDefault();
}

$btnCalcular.onclick = function(){
    const ages = getAllAges();
    if (ages.length > 0) {
      showAges('max',  getMaxAge(ages));
      showAges('min',  getMinAge(ages));
      showAges('avg',  getAverage(ages));
      showElement("statics");
    }
}

function getAllAges() {

  const $integrantes = document.querySelectorAll(".staticIntegrante input");
  const ages = [];
  
  for (let i = 0; i < $integrantes.length; i++) {
    ages.push(Number($integrantes[i].value));
  }
  
  return ages;
}

$btnReset.onclick= function(){

  removeInputAgesFamily();
  hideElement("btn-calcular");
  hideElement("statics");
  showElement("btn-aceptar");

}

function addFamiliar(cantidadFamiliar){
  removeInputAgesFamily();
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

function showElement(typeElement){
  document.querySelector(`#${typeElement}`).className = '';
}

function hideElement(typeElement){
  document.querySelector(`#${typeElement}`).className = 'oculto';
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



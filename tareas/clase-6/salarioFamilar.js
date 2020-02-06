
const $btnAgregar = document.querySelector("#btn-add");
const $btnQuitar = document.querySelector("#btn-remove");
const $btnCalcular = document.querySelector("#btn-calculate");

$btnAgregar.onclick = function(){
    createInputFamily();
    showBtnCalculate();
    hideStatics();
    event.preventDefault();
}

$btnQuitar.onclick = function(){
    hideStatics();
    if(!removeInputFamily()){
        hideBtnCalculate();
        
    }
    event.preventDefault();
}

$btnCalcular.onclick = function(){
    const salaries = getAllSalary();
    
    showSalaries('max',  getMaxSalary(salaries));
    showSalaries('min',  getMinSalary(salaries));
    showSalaries('avgY',  getAvgYearSalary(salaries));
    showSalaries('avgM',  getAvgMonthSalary(salaries));
    showStatics();
    event.preventDefault();
}

function createInputFamily(){

    const $myDiv = document.createElement('div');
    $myDiv.className = "salary";

    const $myLabel = document.createElement('label');
    $myLabel.textContent = "Sueldo Familiar: ";

    const $myInput = document.createElement('input');
    $myInput.type = 'number'

    $myDiv.appendChild($myLabel);
    $myDiv.appendChild($myInput);

    const $family = document.querySelector('#family');
    $family.appendChild($myDiv);

}

function removeInputFamily(){
    const $family = document.querySelector("#family");

    if ($family.childElementCount>=1) {

        $family.removeChild(family.lastChild);
        if($family.childElementCount===0){
            return false;
        }else{
            return true;
        }
    }

}

function getAllSalary() {

    const $integrantes = document.querySelectorAll(".salary input");
    const salary = [];

    for (let i = 0; i < $integrantes.length; i++) {
        if ($integrantes[i].value !== "") {
            salary.push(Number($integrantes[i].value));
        }
      
    }
    return salary;

}


function showSalaries(tipo, valor) {
    document.querySelector(`#${tipo}-salary`).textContent = valor;
}

function getMaxSalary(salary){
    let max = salary[0];
    for (let i = 1; i < salary.length; i++) {
      if (salary[i] > max) {
        max = salary[i];
      }
    }
    return max;
}

function getMinSalary(salary){
    let min = salary[0];
    for (let i = 1; i < salary.length; i++) {
      if (salary[i] < min) {
        min = salary[i];
      }
    }
    return min;
}

function getAvgMonthSalary(salary){
  let total=0;
  for (let i = 0; i < salary.length; i++) {
    total += salary[i];
  }
  return (total / salary.length).toFixed(2);
}

function getAvgYearSalary(salary){
    let total=0;
    for (let i = 0; i < salary.length; i++) {
      total += salary[i] * 12;
    }
    return (total / salary.length).toFixed(2);
  }

function showBtnCalculate(){
    
    document.querySelector("#btn-calculate").className = "";
      
}
function hideBtnCalculate(){
    
    document.querySelector("#btn-calculate").className = "oculto";
      
}

function showStatics(){
    
    document.querySelector("#statics").className = "";
      
}

function hideStatics(){
    
    document.querySelector("#statics").className = "oculto";
      
}


const $btnAgregar = document.querySelector("#btn-add");
const $btnQuitar = document.querySelector("#btn-remove");
const $btnCalcular = document.querySelector("#btn-calculate");

$btnAgregar.onclick = function(){
    createInputFamily();
    event.preventDefault();
}

$btnQuitar.onclick = function(){
    removeInputFamily();
    event.preventDefault();
}

$btnCalcular.onclick = function(){
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
    const $family = document.querySelector('#family');

    if ($family.childElementCount>=1) {

        $family.removeChild(family.lastChild);

    }else{
        console.log("No hay mas hijos.");
    }
  
}

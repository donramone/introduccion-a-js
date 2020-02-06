

const $botonCalcular = document.querySelector("#btn-calcular");

$botonCalcular.onclick = function(){
  const salarioAnual = document.querySelector("#salario-anual").value;
  const salarioMensual = getSalarioMensual(salarioAnual);
  document.querySelector("#salario-mensual").value= salarioMensual;
  return false;
}


function getSalarioMensual(salarioAnual){
return salarioAnual / 12;
}

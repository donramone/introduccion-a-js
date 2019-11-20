
let nombreIngresado = (prompt("Ingresá tu nombre: ") || '' ).toLowerCase();
const NOMBRE_MIO = "luigi";
const NOMBRE_PADRE ="Julio";

if(nombreIngresado.trim().length!==0){

    if(NOMBRE_MIO.toLowerCase()===nombreIngresado){
        console.log("Hola, Tocayo! Yo también me llamo " + nombreIngresado);
    }else if(NOMBRE_PADRE.toLowerCase()===nombreIngresado){
        console.log("Hola " + nombreIngresado + " te llamás igual que mi padre.");
    }else{
        console.log("Hola " + nombreIngresado);
    }
}else{
    console.log("Parece ser que no ingresaste tu nombre.");
}
console.log("***************** Final de Tarea N°1 ********************");
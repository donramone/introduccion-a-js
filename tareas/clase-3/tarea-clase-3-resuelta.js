
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

let edadIngresada=prompt("Ingrese su edad: ");
if(isNaN(edadIngresada) || edadIngresada <= 0){
    console.log(edadIngresada + " No es una edad valida.");
}else{
    console.log("Hola " + verificarEdad(edadIngresada));
}

function verificarEdad(edadUsuario){
    const EDAD_FIJADA=37;
    let msg="";
    if(edadUsuario > EDAD_FIJADA){
       msg="Sos mayor que yo.";
    }else if(edadUsuario < EDAD_FIJADA){
       msg="Sos menor que yo.";
    }else{
       msg="Tenemos la misma edad.";
    }
    return msg;
}
console.log("***************** Final de Tarea N°2 ********************");
if(isHasDni()){
    let age=prompt("Ingresá tu edad: ");
    if(isNaN(age)){
        console.log(age + " no es una edad valida.");
    }else{
        if (isLegalAge(age)) {
            console.log("Podes entrar al Bar.");
        }else {
            console.log("No tenés edad suficiente para entrar al bar.");
        }
    }
    
}
function isHasDni(){
    let checkDni=(prompt("Buenos Días! ¿Tenes Documento? SI/NO" ) || '' ).toUpperCase();
    
    if (checkDni==="SI") {
        return true;
    }else if(checkDni==="NO"){
        console.log("No podés entrar al bar sin documento." );
        return false;
    }else{
        console.log("No entendí la respuesta." );
        return isHasDni();
    }

}

function isLegalAge(age){
    const legalAge =18;
    if (age>=legalAge) {
        return true;
    } else {
        return false;
    }
}
console.log("***************** Final de Tarea N°3 ********************");
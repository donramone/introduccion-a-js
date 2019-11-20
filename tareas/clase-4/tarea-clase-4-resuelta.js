for(i=3;i <=22;i+=3){
    console.log(i);
}
console.log("***************** Final de Tarea N°1 ********************");

//fizzbuz Clasico - como lo resolvi al principio.
/*
for(i=1;i<=50;i++){
    let palabra="";
    if(i % 3 ===0){
       console.log("Fizz");
        // palabra = palabra + "Fizz";
    }if (i % 5 ===0){
        //palabra = palabra + "Buzz";
        console.log("Buzz");
    }
    if (i % 3 === 0 && i % 5 ===0){
        console.log("Fizz Buzz");
    }else{
        console.log(i);
    }
}
*/

fizzBuzz();
function fizzBuzz(){
    for(i=1;i<=50;i++){
        let word="";
        if(i % 3 ===0){
            word = word + "Fizz ";
        }if (i % 5 ===0){
            word = word + "Buzz";
        }
    console.log(word || i);
    }
}
console.log("***************** Final de Tarea N°2 ********************");
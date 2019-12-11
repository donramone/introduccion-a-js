var listNumbers =[2,3,5,4,8,9,1,7,3];
console.log(listNumbers);
getRepeatNumber(listNumbers);
getMaxNumber(listNumbers);
getMinNumber(listNumbers);
getAverage(listNumbers);
//const lis = document.querySelectorAll("li");

function getRepeatNumber(listNumbers){
    
    let replayCount=0;
    let number=0;
    for (let i = 0; i < listNumbers.length; i++) {
         let count=0;
        for (let j = 0; j < listNumbers.length; j++) {
            if (listNumbers[i]===listNumbers[j]) {
                count++;
            }
        }
        if (count > replayCount ) {
            replayCount=count;
            number=listNumbers[i]
        }
    }
     console.log("Array repeat " + replayCount + " number is " + number);
   
}

function getListNumber(){
    const TOTAL_NUMBERS = 10;
    const MAX_NUMBERS = 15;
    listNumbers=[]; 
    for(i=0; i< TOTAL_NUMBERS ;i++){
        listNumbers.push(Math.floor(Math.random() * MAX_NUMBERS) + 1);
    }
    console.log(listNumbers);
}

function getMaxNumber(listNumbers) {
    let max = Number.MIN_VALUE;
    for (let i = 0; i <= listNumbers.length; i++) {
      if (listNumbers[i] > max) {
        max = listNumbers[i];
      }
    }
    console.log("Max number is: " + max);
    return max;
  }
  
  function getMinNumber(listNumbers) {
    let min = Number.MAX_VALUE;
    for (let i = 1; i < listNumbers.length; i++) {
      if (listNumbers[i] < min) {
        min = listNumbers[i];
      }
    }
    console.log("Min number is: " + min);
    return min;
  }
  
  function getAverage(listNumbers) {
    let total  = 0;
    for (let i = 0; i < listNumbers.length; i++) {
      total  += listNumbers[i];
    }
    console.log("The Average number is: " + (total / listNumbers.length));
    return (total / listNumbers.length);
  }

  function createLiComponet(listNumbers){
    var ul = document.createElement('ul'), li;
    for (var i = 0; i < listNumbers.length; i++) {

            li = document.createElement('li');
            li.appendChild(document.createTextNode(listNumbers[i]));
            ul.appendChild(li);

    }
  return ul;

  }
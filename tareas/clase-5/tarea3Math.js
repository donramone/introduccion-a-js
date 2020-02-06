var listNumbers = generateListNumbers();
console.log(listNumbers);
createLiComponet(listNumbers);

let $pMaxNumber = document.querySelector("#p-max-number");
$pMaxNumber.textContent=getMaxNumber(listNumbers);

let $pMinNumber = document.querySelector("#p-min-number");
$pMinNumber.textContent=getMinNumber(listNumbers);

let $pAvgNumber = document.querySelector("#p-avg-number");
$pAvgNumber.textContent=getAverage(listNumbers);

let $pRepeatNumber = document.querySelector("#p-repeat-number");
$pRepeatNumber.textContent=getRepeatNumber(listNumbers);

function generateListNumbers(){
  var numbers = [];
  for (let i = 0; i < 9;i++) {
    num = Math.floor(Math.random() * 9);
    numbers.push(num);
  }
  return numbers;  
}

function createLiComponet(listNumbers){
  
  for (var i = 0; i < listNumbers.length; i++) {
    listItem = document.createElement('li');
    listItem.innerHTML = listNumbers[i];
    $listElement = document.querySelector("ul");
    $listElement.appendChild(listItem);
  }

}

function getRepeatNumber(listNumbers){
    
    let replayCount=0;
    let repeatNumber=0;
    for (let i = 0; i < listNumbers.length; i++) {
         let count=0;
        for (let j = 0; j < listNumbers.length; j++) {
            if (listNumbers[i]===listNumbers[j]) {
                count++;
            }
        }
        if (count > replayCount ) {
            replayCount=count;
            repeatNumber=listNumbers[i]
        }
    }
    return repeatNumber;
   
}


function getMaxNumber(listNumbers) {
    let max = Number.MIN_VALUE;
    for (let i = 0; i <= listNumbers.length; i++) {
      if (listNumbers[i] > max) {
        max = listNumbers[i];
      }
    }
    return max;
  }
  
  function getMinNumber(listNumbers) {
    let min = Number.MAX_VALUE;
    for (let i = 1; i < listNumbers.length; i++) {
      if (listNumbers[i] < min) {
        min = listNumbers[i];
      }
    }
    return min;
  }
  
  function getAverage(listNumbers) {
    let total  = 0;
    for (let i = 0; i < listNumbers.length; i++) {
      total  += listNumbers[i];
    }
    return (total / listNumbers.length);
  }



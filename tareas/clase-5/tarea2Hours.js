

const $btnAdd = document.querySelector("#btn-add");
const $btnClean = document.querySelector("#btn-clean");
let totalHours = 0;
let totalMinutes = 0;
let totalSeconds = 0;

$btnAdd.onclick = function(){
    const idClass = document.querySelector("#text-number-class").value;
    const hours = document.querySelector("#text-hours").value;
    const minutes = document.querySelector("#text-minutes").value;
    const seconds = document.querySelector("#text-seconds").value;
    const line = "Clase " + idClass + ": " + hours + "H "+ minutes + "M " + seconds + "S ";
    addNewTimeClass(line);
    totalTimes(hours,minutes,seconds);

    return false;
}

$btnClean.onclick = function(){
  console.log("clean");
  cleanText();
}

function totalTimes(h, m, s){
  totalHours += Number(h);
  totalMinutes += Number(m);
  totalSeconds += Number(s);
 
  var hours = Math.floor(totalMinutes / 60 + totalHours);
   var minutesRemainder = Math.floor(totalMinutes % 60);
  var minutes = Math.floor(totalSeconds / 60 + minutesRemainder);
  var secondsRemainder = Math.floor(totalSeconds % 60);
  document.querySelector('#result-times').textContent="Total: " + hours + "H. " + minutes + "M. " + secondsRemainder + "S.";
}

function addNewTimeClass(line){
  //TODO 
  // <strong> pre-creado el tiempo total de los videos.
  var element = document.querySelector('#classes-times');
  var pElem = document.createElement('p');

  pElem.className = "pNewLineHour";
  
  pElem.innerHTML = line;
  element.appendChild(pElem);
}

function cleanText(){
  totalHours = 0;
  totalMinutes = 0;
  totalSeconds = 0;
  document.querySelector('#classes-times').textContent= "" ;
  document.querySelector('#result-times').textContent= "";
}

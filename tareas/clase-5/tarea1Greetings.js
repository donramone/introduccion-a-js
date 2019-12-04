const $btnConfirm = document.querySelector("#btn-confirm");

$btnConfirm.onclick = function(){
    const firstName = document.querySelector("#first-name").value;
    const middleName = document.querySelector("#middle-name").value;
    const lastName = document.querySelector("#last-name").value;
    const age = document.querySelector("#age").value;
    
    if(firstName === '' || lastName === '' ){
        alert("First and last name are required!");
        return false;
    }else if(isNaN(age) || age <= 0){
        alert(age + " Is not valid age!");
        return false;
    }

    const msg = firstName + " " + middleName + " " +  lastName + " " + age + " years old."
    showNewData(msg);
    showNewTitle(firstName);
    return false;
}

function showNewData(msg){
   document.querySelector("#result-name").innerHTML=msg;
}

function showNewTitle(name){
    document.querySelector('#header-title').textContent="Welcome " + name ;
}
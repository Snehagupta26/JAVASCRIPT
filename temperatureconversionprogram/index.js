let numbtn = document.getElementById("num");
let subtn = document.getElementById("sub");
let output = document.getElementById("p1");
let cf = document.getElementById("1");
let fc = document.getElementById("2");
let value;
subtn.onclick = function getvalue(){

    if(cf.checked){
        temp = Number(numbtn.value);
        temp = temp * 9/5 + 32;
        output.innerHTML = temp + "°F";
    }
    else if(fc.checked){
        temp = Number(numbtn.value);
        temp = (9/5) * temp + 32;
        output.innerHTML = temp + "°C";
    }
    else{
        output.innerHTML="select a unit";
    }
}



   





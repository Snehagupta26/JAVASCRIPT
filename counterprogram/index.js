//js
const increasebtn = document.getElementById("increase");
const decreasebtn = document.getElementById("decrease");
const resetbtn = document.getElementById("reset");
const val = document.getElementById("num");
let count = 0 ;
increasebtn.onclick = function(){
    count++;
    val.innerHTML = count;
}
decreasebtn.onclick = function(){
    count--;
    val.innerHTML = count;
}
resetbtn.onclick = function(){
    count = 0;
    val.innerHTML = count;
}
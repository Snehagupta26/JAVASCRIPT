let btn = document.getElementById("roll");
let ans = document.getElementById("p1");
let imgg = document.getElementById("p2");
const values = [];
const images = [];
btn.onclick = function rolldice(){
    let numbtn = document.getElementById("1").value;

const min = 1;
const max = 6;
for (let i = 0 ; i < numbtn; i++){
    
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    values.push(num);
    console.log(num);
    images.push(`<img src = "img/img${num}.png" alt = "Dice ${num}"> </img>`);
    console.log("img");
   
   
}
ans.innerHTML = `dice: ${values.join(',')}`;
imgg.innerHTML = images.join(" ");
}
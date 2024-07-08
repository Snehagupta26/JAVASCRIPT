const min = 1;
const max = 100;
const result = Math.floor(Math.random() * (max - min + 1)) + min;
let askUser;
askUser = window.prompt("guess a number between 1 - 100");
askUser = Number(askUser);



while(askUser != result){
    if(isNaN(askUser)){
        alert("enter valid number");
    }
    else if(askUser < min || askUser > max){
        alert("enter valid number");
    } 
    else if(askUser < result){
        alert("too low pls try again");
    } 
    else if(askUser > result){
        alert("too high pls try again");
    }
   
    askUser = window.prompt("guess a number between 1 - 100");
}
alert("you did it");

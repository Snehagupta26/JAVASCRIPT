// //math - built in object that provide collection of properties and methods
// Math.PI
// console.log(Math.PI);//give value
// console.log(Math.E);//give value

// let x = 3.21;
// let y = 3.99;
// let w = 3.21;
// let p = 3.21;
// let z,c,v,b;
// z = Math.round(x);//round of krega
// c = Math.floor(y);//neeche round of
// v = Math.ceil(w);//upr round of
// b = Math.trunc(p);//truncate value
// n = Math.pow(3,2);//3 to the power 2 = 9
// m = Math.sqrt(81);//81 ka sq root
// l = Math.log(10);//log of 10
// si = Math.sin(45);//sin value
// co = Math.cos(45);
// ta = Math.tan(45);

// let i = -67;
// o = Math.abs(i);//abs value
// oi = Math.sign(-9);//-1
// oiw = Math.sign(0);//0
// oit = Math.sign(9);//1

// let num1 = 3;
// let num2 = 4;
// let num3 = 5;
// let max = Math.max(num1,num2,num3);//max
// let min = Math.min(num1,num2,num3);//min

// console.log(z , c , v , b , n , m, l , si , co , ta , o , oi ,oiw , oit);
// console.log(max,min);

// //random number generator

// let randomNum = Math.random();//0-1 get decimal
// console.log(randomNum);

// //random number between 1 and 6 
// let randomNum1 = Math.floor(Math.random() * 6);//0-6 eclusive get decimal(012345)
// console.log(randomNum1);

// let randomNum2 = Math.floor(Math.random() * 6) + 1; //0-6 eclusive get decimal(123456)
// console.log(randomNum2);

// let randomNum3 = Math.floor(Math.random() * 100) + 1; //1-100 
// console.log(randomNum3);

// const mini = 50;
// const maxi = 100;
// let randomNum4 = Math.floor(Math.random() * (maxi - mini)) + mini; 
// console.log(randomNum4);

const myButton = document.getElementById("myButton");
const Label1 = document.getElementById("1Label");
const Label2 = document.getElementById("2Label");
const Label3 = document.getElementById("3Label");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;
myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max ) + min;
    randomNum2 = Math.floor(Math.random() * max ) + min;
    randomNum3 = Math.floor(Math.random() * max ) + min;
    Label1.textContent = randomNum1;
    Label2.textContent = randomNum2;
    Label3.textContent = randomNum3;
}

//if statements
//if cond is true exceute code if not then do something else
let age = 5;
if(age >= 18){
       console.log("you are old enough to enter here");
}
else{
    console.log("you are NOT old enough to enter here");
}
let isStudent = false;
if(isStudent){
    console.log("you r a student");
}else{
    console.log("you r not a student");
}

// age1 = window.prompt("enter age");
// if(age1 > 30){
//     console.log("you are old enough to enter here");
// }

let age3 = 25;
let haslicense = true;
if(age3 >= 16){
    console.log("your are old enough to drive");
    if(haslicense){
        console.log("you can drive");
    }else{
        console.log("we will give u license");
    }
}else{
    console.log("your are NOT old enough to drive");
}

let age4 = 60;
if(age4 >= 18){
    console.log("your are old enough to vote");
}
else if (age4 >50){
    console.log("you r veryy old");//order matters upr vla executed 
}
else if(age4 == 0){
    console.log("you r just born");
}
else if(age4 <0){
    console.log("wrong age");
}
else{
    console.log("your are NOT old enough to vote");
}

document.getElementById("agebutton").onclick = function(){
    let ageuser = document.getElementById("ageinput").value;
    ageinput = Number(ageinput);
    if(ageuser >= 18){
        document.getElementById("p1").innerHTML = "your are old enough to vote";
    }
    else if (ageuser >50){
        document.getElementById("p1").innerHTML = "you r veryy old";//order matters upr vla executed 
    }
    else if(ageuser == 0){
        document.getElementById("p1").innerHTML = "you r just born" ;
    }
    else if(ageuser <0){
        document.getElementById("p1").innerHTML = "wrong age";
    }
    else{
        document.getElementById("p1").innerHTML = "your are NOT old enough to vote";
    }
}

//checked property - determine checked state of an html checkbox or radio button element

let submitbtn = document.getElementById("submit");
let visabtn = document.getElementById("visa");
let Masterbtn  = document.getElementById("MasterCard");
let Paypalbtn = document.getElementById("PayPal");
let subbtn = document.getElementById("subscribe");
let result = document.getElementById("p2");
let result2 = document.getElementById("p3");

submitbtn.onclick = function(){

    if(subbtn.checked){
        result.innerHTML = "you are subscribed";
    }
    else{
        result.innerHTML = "you are not subscribed";
    }

    if(visabtn.checked){
        result2.innerHTML = "you selected visa";
    }
    else if(Masterbtn.checked){
        result2.innerHTML = "you selected mastercard";
    }
    else if(Paypalbtn.checked){
        result2.innerHTML = "you selected paypal";
    }
    else{
         result2.innerHTML = "you did not select any payment mode";
    }
}
//ternary operator
// a shortcut to if{} and else{} statement help to assign a variable based on condition
//condition ? iftrue : if false

let mark = 21;
let msg = mark >= 18 ? "you r pass" : "you are a fail";
console.log(msg);
let isman = false;
let msg2 = isman ? "yes u r" : "haha u r not";
console.log(msg2);

let purchaseamt = 12;
let discount = purchaseamt >= 100 ? 10 : 0;

console.log(`your total is $${purchaseamt - purchaseamt * (discount/100)}`);

//switch - replacement of if else

let day = 1;
if(day == 1){
    console.log("monday");
}
else if(day == 2){
    console.log("tuesday");
}
else if(day == 3){
    console.log("wedday");
}
else if(day == 4){
    console.log("thrusday");
}
else{
    console.log("idk");
}

let dayy = 4;
switch(dayy){
    case 1:
        console.log("mon");
        break;
    case 2:
        console.log("tue");
        break;
    case 3:
        console.log("wed");
        break;
    case 4:
        console.log("thur");
        break;
    default:
        console.log("idk");
}

let testscore = 12;
let lettergrade;

switch(true){
    case testscore>=90:
        lettergrade = "A";
        break;
    case testscore>=80:
        lettergrade = "B";
        break;
    default:
        lettergrade = "F";
    
}
console.log(lettergrade);

//string methods - allow yo to manipulate and work with text(strings)
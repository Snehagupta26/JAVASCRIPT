//function - section of reusable code, declare code one use it whenever you want, call function to exceute code
function happyBirthday(username , age){
    console.log("happy birthday to you!");
    console.log("happy birthday to you!");
    console.log(`happy birthday dear ${username}!`);
    console.log("happy birthday to you!");
    console.log(`you are ${age} years old`);
}

happyBirthday("sneha" , 20);
happyBirthday("achal" , 24);

function add(x,y){
    let result = x+y;
    return result;
}
let ans = add(2,3);
console.log(`ans is ${ans}`);
console.log(add(2,3));
function subtract(x,y){
    return x - y;
}
console.log(subtract(2,3));

function mul(x,y){
    return x*y;
}
console.log(mul(2,3));

function div(x,y){
    return x/y;
}
console.log(div(2,3));

function isEven(number){
    if(number % 2 === 0){
        return true;
    }else{
        return false;
    }
}
console.log(isEven(11));

function isvalidemail(email){
    if(email.includes("@")){
        return true;
    }
    else{
        return false;
    }

}
console.log(isvalidemail("sneha@gmail.com"));

//variable scope - var is recognized and accessible (local vs global)
fun1();
fun2();
let y = 5;
fun3();
function fun1(){
    let x = 1;
    console.log(x);
}
function fun2(){
    let x = 2;
    console.log(x);
}
function fun3(){
    console.log(y);
}

let p = 1;
fun11();
function fun11(){
    let p =90;
    console.log(p);
}
//array - variable like structure that can hold more than 1 value

let fruits = ["apple" , "orange" , "banana"];
console.log(fruits);
console.log(fruits[0]);
fruits[1] = "coconut";
fruits.push("raspberry");
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
fruits.pop();
console.log(fruits[3]);
fruits.unshift("mango");//add elemt to begin
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
fruits.shift();//remove from begin
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

let numOfFruits = fruits.length;
console.log(numOfFruits);
let index = fruits.indexOf("apple");
console.log(index);
let index1 = fruits.indexOf("tomato");
console.log(index1);

for(let i = 0 ; i < fruits.length ; i++){
    console.log(fruits[i]);
}
for(let i = fruits.length - 1 ; i >= 0; i--){
    console.log(fruits[i]);
}
for(let fruit of fruits){
    console.log(fruits);
}

fruits.sort();
for(let fruit of fruits){
    console.log(fruits);
}
fruits.reverse();
for(let fruit of fruits){
    console.log(fruits);
}
//spread operator = ...allows an iterable such as an array or string to be expanded into separate elements(unpacks the elements)
let numbers = [1,2,3,4,5];
let maxi = Math.max(...numbers);
console.log(maxi);
let maxii = Math.max(numbers);
console.log(maxii);
let mini = Math.min(...numbers);
console.log(mini);

let userName = "sneha gupta";
let letters = [...userName].join("-");
console.log(letters);

let fruitss = ["apple" , "oragne" , "banana"];
let veg = ["carrots" , "celery" , "potato"];
//let foods = [...fruits , ...veg , "eggs" , "milk"];
//console.log(foods);
console.log(fruitss);
//shallow copy diff ds contain identical val
let newFruits = [...fruitss];
console.log(newFruits);

//rest parameter = (...rest)  allow a function work with a varible number of arguments by bundling them into an array
// spead = expands an array into separate elements 
// rest = bundles separate elements into array
function openFridge(...foods){
    console.log(...foods);
}
function getFood(...foods){
    return foods;
}
const food1 = "pizza";
const food2 = "burger";
const food3 = "hotdog";
const food4 = "sushi";
openFridge(food1 , food2 , food3 , food4);
const foods = getFood(food1 , food2 , food3 , food4 );
console.log(foods);


function sum(...values){
    console.log(values);
    let sum = 0;
    for(let value of values){
        sum = sum + value;
    }
    console.log(sum);

}
const v1 = 2;
const v2 = 4;
const v3 = 5;
const v4 = 6;
sum(v1,v2,v3,v4);

function combineStrings(...strings){
    return strings.join(" ");
}
const fullName = combineStrings("mr" , "mickey" , "mouse");
console.log(fullName);




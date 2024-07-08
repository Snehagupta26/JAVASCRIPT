// console.log(`hello`);
// console.log(`i like pizza`);

// window.alert(`this is an alert!`);
// window.alert(`i like pizza!`)
//this is a comment
/*this
is
a 
comment*/
document.getElementById("myH1").textContent = `Hello`;
document.getElementById("myP").innerHTML = `I like pizza !`;

//variable = a container that stores a vales
// behave as if it were the value it contains

//1 declaration let x;
//asssginment x = 100;

let x ;
//let x; syntac error - redeclared
x = 100;
console.log(x);

let y = 123;
console.log(y);

z = 450;
console.log(450);

let age = 25;
let price = 10.99;
let gpa = 2.1;


console.log(age);
console.log(price);
console.log(gpa);
console.log(`you are ${age} years old`);
console.log(`The price is  $${price} years old`);
console.log(`your gpa is ${gpa}`);
console.log(typeof age);
console.log(typeof price);
console.log(typeof gpa);
let firstName = "sneha";
let email = "sneha1234@gmail.com";
console.log(typeof firstName);
console.log(firstName);
console.log(`your name is ${firstName}`);
console.log(`your email is ${email}`);
console.log(typeof email);

let online = true;
console.log(typeof online);
console.log(`bro is online : ${online}`);
console.log(`sneha is online : ${online}`);

let forSale = false;
console.log(`is this car for sale ${forSale}`);

let fName = "achal";
let ageNum = 24;
let lName = "Gupta";

document.getElementById("1").textContent = (`this first name is ${fName}`);
document.getElementById("2").textContent = (`the age is ${ageNum}`);
document.getElementById("3").textContent = lName;

//arithmetic operators - operands (values , variable etc)
//                        operator(+-*/)
//                        eg 11 = x + 5;

let students = 30;
console.log(students);
students = students + 1;
console.log(students);
students = students - 1;
console.log(students);
students = students * 2;
console.log(students);
students = students / 2;
console.log(students);
students = students ** 2; //power of 2 - exponent
console.log(students);
students = students % 2;
console.log(students);

//augment assignment operators
let population = 30;
population += 1;
console.log(population);
population -= 1;
console.log(population);
population *= 2;
console.log(population);
population /= 2;
console.log(population);
population **= 2;
console.log(population);
population %= 2;
console.log(population);
population++;
console.log(population);
population--;
console.log(population);

//operator precedence left to right walk through
// paranthesis()
// exponents **
// multiply divide modulo
// add subtract

let result = 1 + 2 * 3 + 4 ** 2; //1+2*3+ 16 ==>> 1+6+16 ==>23
console.log(result);
let result2 = 12%5 + 8/2; // 2 + 4 = 6
console.log(result2);
let result3 = 6 / 2 ** (2 + 5); // 6 / 2 ** 7 ==> 6/128 = 0;
console.log(result3);

//accept user input

//easy way - window prompt
// professional way = html textbox

let username;
// username = window.prompt("what is your name");
// console.log(username);
// let fathername = window.prompt("enter father name too");
// console.log(fathername);

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myh").textContent = `Hello ${username}`;
}

//type conversion - change datatype of one value to another
// string number boolean

// let age1 = window.prompt("how old are you");
// age1+=1;
// console.log(age1);//print 121 if input 12

// let age2 = window.prompt("how old?");
// age2 = Number(age2);
// age2 += 1;
// console.log(age2 , typeof age);

let p = "pizza";
let q = "pizza";
let r = "pizza";
p = "0" , q = "0" , r = "0";
p = "" , q = "" , r = "";
// p,q,r;
p = Number(p);
q = String(q);
r = Boolean(r);
console.log(p , typeof p);
console.log(q , typeof q);
console.log(r , typeof r);

//const - a variable that cant be changed
const PI = 3.14159;
let radius;
let circuference;
//PI = 34 TYPERROR
radius = window.prompt("enter radius ");
radius = Number(radius);
circumference = 2 * PI * radius;
console.log(circumference);
const pi = 3.14;
let r1;
let circum;
document.getElementById("q3").onclick = function(){
   
    r1 = document.getElementById("q1").value;
    r1 = Number(r1);
    circum = 2 * pi * r1;
    document.getElementById("q2").textContent = circum + "cm";
}

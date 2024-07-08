//string method - allow you to manipulate and work with text
let userName = "sneeha ";
//built in method to manipulate text
//dot access prop nd method

console.log(userName.charAt(0));
console.log(userName.charAt(1));
console.log(userName.charAt(8));
console.log(userName.indexOf("e"));
console.log(userName.lastIndexOf("e"));
console.log(userName.length);
userName = userName.trim();//trim whitespace
console.log(userName);
userName = userName.toUpperCase();
console.log(userName);
userName = userName.toLowerCase();
console.log(userName);
userName = userName.repeat(3);
console.log(userName);
let result = userName.startsWith(" ");
console.log(result);
let result2 = userName.endsWith(" ");
console.log(result2);
let uname = "sneh aaaa";
let result3 = userName.includes(" ");
console.log(result3);
let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.replaceAll("-","");
console.log(phoneNumber);
phoneNumber = phoneNumber.padStart(15,"0");
console.log(phoneNumber);
phoneNumber = phoneNumber.padEnd(20,"0");
console.log(phoneNumber);
//string slicing - creating a substring from portion of a string string.slice
const fullName = "sneha gupta";
let firstName = fullName.slice(0 , 5);
console.log(firstName);
let lastName = fullName.slice(6 , 11);
console.log(lastName);
let lname = fullName.slice(6);
console.log(lname);

let firstChar = fullName.slice(0,1);
console.log(firstChar);
let lastChar = fullName.slice(-1);
console.log(lastChar);

let firstN = fullName.slice(0 , fullName.indexOf(" "));
console.log(firstN);

let lastN = fullName.slice(fullName.indexOf(" ") +  1);
console.log(lastN);

const email = "sneha@gmail.com"
let usern = email.slice(0 , email.indexOf("@"));
let extention = email.slice(email.indexOf("@") + 1);
console.log(usern);
console.log(extention);

//method chaining - calling one method after another in one continous line of code
// no method chaining
let personName = window.prompt("enter your username");

// personName = personName.trim();
// let letter = personName.charAt(0);
// letter = letter.toUpperCase();
// let extraChars = personName.slice(1);
// extraChars = extraChars.toLowerCase();
// personName = letter + extraChars;
// console.log(personName);

//method chaining
personName = personName.trim().charAt(0).toUpperCase() + personName.trim().slice(1).toLowerCase();
console.log(personName);

//logical operators - used to combine or manipulate boolean variables
//true or false and or not && , || , !

const temp = 30;
if(temp>0 && temp<30){
    console.log("good weather");
}
else if(temp>30 || temp == 30){
    console.log("weather ok");
}

const isSunny = true;
if(!isSunny){
    console.log("it is sunny");
}else{
    console.log("it is cloudy");
}

//strict equality operator ===
// comapre if value and datatype are equal
// = assignment operator assign value to a variable
// == comparison open. compare if val are equal
// != inequality true of 2 value r not equal
//!== strict inequality operator

const PI = 3.14;
if(PI == "3.14"){
    console.log("it is pi");
}else{
    console.log("not pi");
}
if(PI === "3.14")//pi number and 3.14 here string
{
    console.log("it is pi");
}else{
    console.log("not pi");
}
if(PI != "3.14"){
    console.log("it is not pi");
}else{
    console.log("pi");
}
if(PI !== "3.14"){
    console.log("it is not pi");
}else{
    console.log("pi");
}
//while loop = repeat some code while some condition is true
let usernamee = "";
while(usernamee === "" || usernamee === null){
    usernamee = window.prompt("enter name na");
}
console.log(`hello ${usernamee}`);
//do while
// do{
//     usernamee = window.prompt("enter name na");//execute at least 1 then check condition at end
// }while(usernamee === "" || usernamee === null);
// console.log(`hello ${usernamee}`);
//in do while you can leave let username 

let loggedIn = false;
let usernameee;
let password;
while(!loggedIn){
    usernameee = window.prompt("enter your name");
    password = window.prompt("enter your pass");
    if(usernameee === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("you are logged in");
    }else{
        console.log("invalid credential");
    }
}
// do{
//     usernameee = window.prompt("enter your name");
//     password = window.prompt("enter your pass");
//     if(usernameee === "myUsername" && password === "myPassword"){
//         loggedIn = true;
//         console.log("you are logged in");
//     }else{
//         console.log("invalid credential");
//     }
// }while(!loggedIn)
//for loop = repeat some code limited amt of time
for(let i = 0 ; i <= 2 ; i++){
    
    if(i == 1){
        continue;//skip iteration 02
        //break;// break it 0
    }else{
        console.log(i);
    }
   

}
//es6 modules
//an external file that contains reusable code that can be imported into other js files.write reusable code for many different apps.can contain variables , classes , function and more introduced as a part of ECMAScript 2015 update
import {PI , circum , area , vol} from './mathUtil.js';
console.log(PI);
const cir = circum(10);
console.log(cir);
const ci = circum(9);
console.log(ci);
const a= area(10);
console.log(a);
const v = vol(0);
console.log(v);

//synchronous = executes line by line consecutively in sequential manner. code that waits for an operation to complete
//asynchornous = allow multiple operations to be performed concurrently without waiting doesnt block the execution flow and allows the program to continue (io operations , network req , fetch data) handled with callback promises asyn/await
console.log("task 1 done");
console.log("task 2 done");
console.log("task 3 done");
console.log("task 4 done");

setTimeout(()=>{
    console.log("task 1 done");
},3000);
hello(bye);
function hello(callback){
    console.log("hello")
    callback();
}
function bye(){
    console.log("bye");
}
//error - an object that is created to represent a problem that occurs 
//occur often with user input or establishing a connection
try{
    console.log(x);
}catch(error){
    console.error(error);
}finally{
    console.log("this always run");
}
console.log("done");
try{
    const dividend = Number(window.prompt("enter num : "));
    const divisor = Number(window.prompt("enter num : "));

    if(divisor == 0){
        throw new Error("cant divide by 0");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("should be a num");
    }
    const result = divident/divisor;
    console.log(result);
}catch(error){
    console.error(error);
}

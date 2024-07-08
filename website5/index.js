// callback = a function that is passed as an argument to another function
//   handle asynchoronous operations:
//   reading a File,  network request , interacting with database
//   hey when you are done call this next. - DONE BY CALLBACK
// long time to read file then we dont wait for process to finish
// js might continue with rest of prog
hello(leave);
//goodbye();
function hello(callback){
    console.log("hello");
    callback();
}
function leave(){
    console.log("leave");
}
function goodbye(){
    console.log("goodbye");
}

sum(displayconsole , 1 , 2);
sum(displayPage , 1 , 2);
function sum(callback,x,y){
    let result = x + y;
    callback(result);//call callback fun i.e displayconsole . result as arg is passed
}
function displayconsole(result){
    console.log(result);
}

function displayPage(result){
   document.getElementById("myH1").textContent = result;
}

//forEach() - method used to iterate over elements
            //   of an array and apply a specified function(callback)
            //    to each Element

            //    array.forEach(callback)
            //element , index , array are provided

let numbers = [1,2,3,4,5];

numbers.forEach(double);
numbers.forEach(display);

function double(element , index , array){
    array[index] = element * 2;
}

function display(element){
    console.log(element);
}
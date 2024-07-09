//fun declaration -> define reusable block of code that performs a specific task
function hello(){
    console.log("hello");
}
//fun expression -> a way to define functions as values or variables
const hello1 = function(){
    console.log("hello");
}
hello();
hello1();

//pass function as a value

//setTimeout(callback , 3000);//callback , 3000 milisec after this time exceute the fun
setTimeout(hello1 , 3000);
setTimeout(function(){
    console.log("bye");
} , 3000);

const numbers = [1,2,3,4,5,6];
const sq = numbers.map(function (element){
    return Math.pow(element , 2);
});
console.log(sq);

const cube = numbers.map(function(element){
    return Math.pow(element , 3);
});

console.log(cube);

const even = numbers.filter(function(element){
    return element % 2 === 0;
});
console.log(even);

const total = numbers.reduce(function(prev , next){
    return prev + next;
});
console.log(total);

//function expression = way to define function as value or as expression

// 1. callbacks in asynchronous operations
// 2. higher order functions
// 3. closures
// 4. event listeners

const helloW = function(){
    console.log("hello world");
}
helloW();
setTimeout( function(){
    console.log("good luck !")
}, 3000);


//arrow functions = a concise way to write function expression good for simple functions that you use only once (parameters) => some code

function welcome(){
    console.log("welcome");
}
welcome();

const welcome2 = function(){
    console.log("welcome");
}

welcome2();

const welcome1 = () => console.log("haha arrow aagya");
welcome1();

const myName = (name) => console.log(`my name is ${name}`);
myName("sneha");

const myName1 = (name , age) => {
    console.log(`my name is ${name}`);
    console.log(`you r ${age} old`);
}
myName1("sneha" , 23);


setTimeout(() => {
    console.log('i did it');
    console.log("hiiiiiiiiiiii");
} ,2000);


const num = [1,2,3,4,5,6];

const sqNum = num.map(
    (element) => {
        return Math.pow(element , 2);
    }
);
console.log(sqNum);
const cubeNum = num.map(
    (element) =>  Math.pow(element , 3)
    
);
console.log(cubeNum);


const isOdd = num.filter(
    (element) => {
        return element !== 0;
    }
);
console.log(isOdd);

const findMax = num.reduce(
    (prev , next) => {
        return Math.max(prev , next);
    }
);
console.log(findMax);
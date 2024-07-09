// forEach() -  method used to iterate over element of array and apply a specified func (callback) for each element
// array.forEach(callback)
//element index array are provided already
let numbers = [1,2,3,4,5];


numbers.forEach(double);
numbers.forEach(sq);
numbers.forEach(display);
//callback element loop through array , index keep track of current index number .array argu location of array itself

function double(element,index,array){
    array[index]  = element * 2;

}
function sq(element,index,array){
    array[index] = Math.pow(element , 2);
}

function display(element){
    console.log(element);
}

let fruits = ["apple" , "banana" , "orangJKFDe" , "coconut"];

//fruits.forEach(makeUpperCase);
fruits.forEach(makeCaptial);
fruits.forEach(show);

function makeUpperCase(element , index , array){
    array[index] = element.toUpperCase();
    
}

function makeCaptial(element , index , array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
}

function show(element){
       console.log(element);
}

//map() - accept a callback and applies that function to each element in array and return new array

//foreach //////////// map - return new array

const number = [1,2,3,4,5];
console.log(number);

const sq1 = number.map(square);
console.log(sq1);

function square(element){
      return Math.pow(element,2);
}

const students = ["sneha" , "achal" , "ayushi" , "govinda"];
const newStudent = students.map(upper);

console.log(newStudent);

function upper(element){
    return element.toUpperCase();
}

const dates = ["2024-1-10","2026-1-12","2024-2-23","2021-1-10" ]

const formatted = dates.map(formatDates);

console.log(formatted);

function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}


//filter() = creates a new array by filtering out elements

let numbers1 = [1,2,3,4,5,6,7];

let evenNum = numbers1.filter(isEven);

console.log(evenNum);

function isEven(element){
    return element % 2 === 0 ;
}

const ages = [16,17,18,17,60,43];

let adults = ages.filter(isAdult);
console.log(adults);

function isAdult(element){
    return element <= 19;
}

const words = ["apple" , "mango" , "orange" , "lichi"];

const newWord = words.filter(isLength);
console.log(newWord);

function isLength(element){
    return element.length > 5;
}

//reduce() = reduce the elements of an array to a single value

const prices = [5,30,10,25,15,20];

const total = prices.reduce(sumVal);

console.log(total);

// //accumulator = previous . element = next
// 0 + 5 = 5 1 iteration
// prev = 5 next = 30
// 5 + 30 = 35
// prev = 35 next = 10
function sumVal(accumulator , element){
    return accumulator + element;
}

const grades = [54,76,45,32,89,12];

const maxi = grades.reduce(findMax);
console.log(maxi);

function findMax(prev , element){
    return Math.max(prev, element);
}
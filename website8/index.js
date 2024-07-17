//object = a collection of related properties or methods can represent real world objects(people , products , places) object = {key : value , function()}
const person1 = {
    firstName : "sneha",
    lastName : "gupta",
    age : 30,
    isEmployed : true,

    sayHello : function(){
        console.log("hello log")
    },

    eat : ()=>{
        console.log("i m eating pear")
    },
}
const person2 = {
    firstName : "achal",
    lastName : "gupta",
    age : 34,
    isEmployed : false,
    sayHello : function(){
        console.log("hello girls and boys")
    },
    eat : ()=>{
        console.log("i m eating pizza")
    },
}
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.eat();

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();
person2.eat();

//this reference to the object where THIS is used. object depend on the immediate conetext person.name = this.name
const person3 = {
    name : "sneha",
    favFood : "lichi",
    sayHello : function(){console.log(`hi I M ${this.name}`)},
    eat : function() {
    console.log(`${this.name} is eating ${this.favFood}`)
     },
}
//dont work with arrow function as it makes reference to window object
person3.sayHello();
person3.eat();
console.log(this);

//constructors = special method for defining the prop and methods of objects

function Car(makee , model , year , color){
      this.make = makee,
      this.model = model,
      this.year = year,
      this.color = color,
      this.drive = function(){
        console.log(`you drive ${this.make}`)
      }
}
const car1 = new Car("ford" , "mustang" , 2024 , "red")
const car2 = new Car("audi" , "tang" , 2022 , "orange")
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
car1.drive();

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
//classes = ES6 feature provide a more structures and cleaner way to work with objects compared to traditional constructor func
// eg static keyword , encapsulation , inheritance

class Products{
    constructor(name , price){
        this.name = name;
        this.price = price;
    }
   display(){
    console.log(`product is ${this.name}`);
    console.log(`price is ${this.price}`);
   }
   calculateTax(price){
        let tax = price * 10/100;
        console.log(tax);
   }
}
const prod1 = new Products("shirt" , 900);
prod1.display();
prod1.calculateTax(900);


//static = keyword that defines properties or methods that belong to a class itself rather than the objects created from that class(class own anything static . not the objects)

class mathUtil{
    static PI = 3.14159;//static prop

    static getDiameter(radius){
        return radius*2;
    }
    static getcic(radius){
        return radius*2*this.PI;
    }


}
console.log(mathUtil.PI);//access it
console.log(mathUtil.getDiameter(10));
console.log(mathUtil.getcic(10));

class User{
    static userCount = 0;

    constructor(userName){
          this.userName = userName;
          User.userCount++;
    }
   static getcount(){
    console.log(`${User.userCount}`)
   }
   Hello(){
    console.log("hi hi");
}
}
const user1 = new User("sneha");
const user2 = new User("eha");
console.log(user1.userName);
user1.Hello();
console.log(User.getcount());
console.log(user1.userCount);
console.log(User.userCount);
//inheritance = allows a new class to inherit the properties and methods from an existing class (parent->child) helps with code reusability

class Animal{
    alive = true;
    eat(){
        console.log('This ${this.name} is eating');
    }
}


// JavaScript is a programming language that is commonly used to create interactive effects within web browsers. 
// It is a versatile language that can be used for both client-side and server-side development.

/*
JavaScript is a high-level, interpreted programming language that is widely used for web development. 
It was created by Brendan Eich in 1995 and has since become one of the most popular programming languages in the world. 
JavaScript is primarily used for adding interactivity and dynamic behavior to websites, but it can also be used for 
server-side development, mobile app development, and even game development.

JavaScript is a versatile language that supports multiple programming paradigms, including object-oriented, 
functional, and procedural programming. It is also a loosely typed language, which means that variables can hold
values of any type without requiring explicit type declarations.

Some of the key features of JavaScript include:

1. Dynamic typing: Variables can hold values of any type without requiring explicit type declarations.
2. First-class functions: Functions in JavaScript are treated as first-class citizens, meaning they can be 
assigned to variables, passed as arguments to other functions, and returned from functions.
3. Prototypal inheritance: JavaScript uses prototypal inheritance, which allows objects to inherit properties and 
methods from other objects.
4. Event-driven programming: JavaScript is designed to handle events, such as user interactions and server responses, 
making it ideal for creating interactive web applications.
5. Asynchronous programming: JavaScript supports asynchronous programming through features like callbacks, promises,
and async/await, allowing developers to write non-blocking code.

Overall, JavaScript is a powerful and flexible language that has become an essential tool for web developers and 
continues to evolve with new features and capabilities.
*/


console.log("helloo world");
console.log("welcome to simmy's world");


//variables are used to store data values. In JavaScript, there are three ways to declare variables: var, let, and const.
// var, let, const
// var is function scoped and can be re-declared and updated
var name = "simmy";
console.log(name);
var name = "simran";
console.log(name);

// let is block scoped and can be updated but not re-declared
let age = 25;
console.log(age);
age = 26;
console.log(age);
// let age = 27; // This will throw an error

// const is block scoped and cannot be updated or re-declared
const city = "delhi";
console.log(city);
// city = "mumbai"; // This will throw an error
// const city = "kolkata"; // This will also throw an error

// data types
// primitive data types: string, number, boolean, null, undefined, symbol
// non-primitive data types: object, array, function

// string
let firstName = "simran";
console.log(firstName);

// number
let age1 = 25;
console.log(age1);

// boolean
let isStudent = true;
console.log(isStudent);

// null
let nullValue = null;
console.log(nullValue);

// undefined
let undefinedValue;
console.log(undefinedValue);

// symbol
let sym1 = Symbol("sym1");
console.log(sym1);

// object
let person = {
    name: "simran",
    age: 25,
    city: "delhi"
};
console.log(person);

// array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// function
function greet() {
    console.log("hello simran");
}
greet();    




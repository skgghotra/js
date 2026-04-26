console.log("Loops are used to repeat a block of code until a specified condition is met");

console.log("For loop is used to execute a block of code a specified number of times");
//example of a for loop that prints the numbers from 0 to 4
//explain the syntax of a for loop: for (initialization; condition; increment/decrement) { // code to be executed }
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//while loop is used to execute a block of code as long as a specified condition is true
//example of a while loop that prints the numbers from 0 to 4
//explain the syntax of a while loop: while (condition) { // code to be executed }
let j = 0;
while (j < 5) {           //explain the importance of the condition in a while loop to avoid infinite loops
    console.log(j);
    j++;             // explain the importance of incrementing/decrementing the variable in a while loop to avoid infinite loops
}

//do-while loop is similar to while loop, but it executes the block of code at least once, even if the condition is false
//example of a do-while loop that prints the numbers from 0 to 4
//explain the syntax of a do-while loop: do { // code to be executed } while (condition)
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);

console.log("End of loops examples");

console.log("Now let's compare the different types of loops and when to use them");
console.log("Use for loop when the number of iterations is known beforehand, use while loop when the number of iterations is not known and the loop needs to continue until a certain condition is met, and use do-while loop when the block of code needs to be executed at least once, regardless of the condition.");
console.log("For example, if you want to iterate over an array of known length, use a for loop. If you want to keep asking the user for input until they provide valid input, use a while loop. If you want to execute a block of code at least once, such as displaying a menu to the user, use a do-while loop.");
console.log("It's important to choose the right type of loop based on the specific use case to ensure that your code is efficient and easy to read.");

console.log("Now let's compare for...in and for...of loops");
console.log("Use for...in loop to iterate over the properties of an object, and use for...of loop to iterate over the values of an iterable object, such as an array. For example, if you want to iterate over the keys of an object, use a for...in loop. If you want to iterate over the values of an array, use a for...of loop.");  
console.log("It's important to choose the right type of loop based on the specific use case to ensure that your code is efficient and easy to read.");  



//for...in loop is used to iterate over the properties of an object
let person = {name: "John", age: 30, city: "New York"};
for (let key in person) {
    console.log(key + ": " + person[key]);
}

//for...of loop is used to iterate over the values of an iterable object, such as an array
let numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
    console.log(number);
}   

//explain the difference between for...in and for...of loops
//for...in loop iterates over the keys of an object, while for...of loop iterates over the values of an iterable object. 
//for...in loop is used for objects, while for...of loop is used for arrays and other iterable objects. 



//difference between for, while, and do-while loops
//for loop is used when the number of iterations is known beforehand, while loop is used when the number of iterations is not known and the loop needs  
// to continue until a certain condition is met, and do-while loop is used when the block of code needs to be executed at least once, regardless of the condition.


//explain more about for, while, and do-while loops with examples
//for loop example: printing the first 10 natural numbers
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//while loop example: printing the first 10 natural numbers
let m = 1;
while (m <= 10) {
    console.log(m);
    m++;
}

//do-while loop example: printing the first 10 natural numbers
let n = 1;
do {
    console.log(n);
    n++;
} while (n <= 10);  

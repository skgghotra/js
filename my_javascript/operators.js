 //comments are used to explain the code and make it more readable.
//example of single line comment
// This is a single line comment

/* 
This is a multi-line comment
It can span multiple lines
*/



//operators are used to perform operations on variables and values. 
// There are different types of operators in JavaScript, including arithmetic, assignment, comparison, logical, and more.



// Arithmetic Operators is used to perform mathematical operations on numbers.
let a = 7;
let b = 3;
console.log("Addition:", a + b); // 10
console.log("Subtraction:", a - b); // 4
console.log("Multiplication:", a * b); // 21
console.log("Division:", a / b); // 2.3333
console.log("Modulus:", a % b); // 1
console.log("Exponentiation:", a ** b); // 343



// Assignment Operators is used to assign values to variables.
let c = 5;
c += 2; // c = c + 2
console.log("After += :", c); // 7

c -= 3; // c = c - 3
console.log("After -= :", c); // 4

c *= 4; // c = c * 4
console.log("After *= :", c); // 16

c /= 2; // c = c / 2
console.log("After /= :", c); // 8

c %= 3; // c = c % 3
console.log("After %= :", c); // 2

c **= 3; // c = c ** 3
console.log("After **= :", c); // 8




//comparison operator is used to compare two values and returns a boolean value (true or false).
let x = 30;
let y = 10;
console.table("x == y:", x == y); //equality operator, checks if x is equal to y, returns false
console.log("x === y:", x === y); //strict equality operator, checks if x is equal to y and of the same type, returns false why? 
// because x is 30 and y is 10, they are not equal and not of the same type 
// same type means both should be number or both should be string, in this case both are number but they are not equal, 
// so it returns false          
console.log("x != y:", x != y); //inequality operator, checks if x is not equal to y, returns true
console.log("x !== y:", x !== y); //strict inequality operator, checks if x is not equal to y or not of the same type, returns true
console.log("x > y:", x > y); //greater than operator, checks if x is greater than y, returns false
console.log("x < y:", x < y); //less than operator, checks if x is less than y, returns true
console.log("x >= y:", x >= y); //greater than or equal to operator, checks if x is greater than or equal to y, returns false
console.log("x <= y:", x <= y); //less than or equal to operator, checks if x is less than or equal to y, returns true



//logical operator is used to combine multiple conditions and returns a boolean value (true or false).
let r=8>5; //true
let s=3>5; //false
console.log("r && s:", r && s); //logical AND operator, returns true if both r and s are true, returns 0
console.log("r || s:", r || s); //logical OR operator, returns true if either r or s is true, returns 10
console.log("!r:", !r); //logical NOT operator, returns true if r is false, returns true
console.log("!s:", !s); //logical NOT operator, returns true if s is false, returns false






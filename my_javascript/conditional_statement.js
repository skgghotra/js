//conditional statements are used to perform different actions based on different conditions. 
// In JavaScript, we have if, else if, and else statements to handle conditional logic.


// if statement is used to execute a block of code if a specified condition is true.
let num = 10;
if (num > 0) {
    console.log("The number is positive.");
}

// else if statement is used to specify a new condition to test, if the first condition is false.
let num1 = -5;
if (num1 > 0) {
    console.log("The number is positive.");
} else if (num1 < 0) {
    console.log("The number is negative.");
}

// else statement is used to execute a block of code if all the conditions are false.
let num2 = 0;
if (num2 > 0) {
    console.log("The number is positive.");
} else if (num2 < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}       



//operators can also be used in conditional statements to combine multiple conditions.
//ternary operator is a shorthand for if-else statement. It takes three operands: a condition, an expression to execute 
// if the condition is true, and an expression to execute if the condition is false.
let age = 18;
let canVote = (age >= 18) ? "You can vote." : "You cannot vote.";
console.log(canVote);   

//how to take user input and use it in conditional statements
// In JavaScript, we can use the prompt() function to take user input. 
// The prompt() function displays a dialog box that prompts the user for input and returns the input as a string.

let userAge = prompt("Please enter your age:");
if (userAge >= 18) {
    console.log("You are eligible to vote.");
}



//another example of giving grades based on the score
let score = prompt("Please enter your score:");
if ((score <= 100) && (score >= 90))
{
    console.log("You got an A grade.");
}
else if ((score >= 80) && (score < 90))
{
    console.log("You got a B grade.");
}
else if ((score >= 60) && (score < 80))
{
    console.log("You got a C grade.");
}
else if ((score >= 50) && (score < 60))
{
    console.log("You got a D grade.");
}
else
{
    console.log("You got an F grade.");
}
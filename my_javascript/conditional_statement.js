//CONDITIONAL STATEMENTS

//IF STATEMENT
let num = 10;
if (num > 0) {
    console.log("The number is positive.");
}

// ELSE-IF STATEMENT
let num1 = -5;
if (num1 > 0) {
    console.log("The number is positive.");
} else if (num1 < 0) {
    console.log("The number is negative.");
}

// ELSE STATEMENT
let num2 = 0;
if (num2 > 0) {
    console.log("The number is positive.");
} else if (num2 < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}       

//TERNARY OPERATOR
let age = 18;
let canVote = (age >= 18) ? "You can vote." : "You cannot vote.";
console.log(canVote);   

//PROMPT FUNCTION
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
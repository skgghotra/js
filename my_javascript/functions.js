console.log("function declaration:");
function my_function() {
    console.log("i am learning js");
}
my_function();
my_function();
    
console.log("function with parameters:");   //it allows us to pass values to the function when we call it, and the function can use those values to perform its task.
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Alice");
greet("Bob");

console.log("function with return value:");      //it allows us to return a value from the function, which can be used later in the code.
function add(a, b) {
    return a + b;      
}
let sum = add(5, 3);
console.log(sum);   

function m(a,b){                      
    m=a*b;
    return m;                         
}
let val=m(6,8);
console.log(val);

console.log("arrow function:");    // it allows us to write shorter function syntax. It is often used for anonymous functions or when we want to write a concise function expression.  //syntax: (parameters) => { statements } or for single expression: (parameters) => expression

const add_num = (a, b) => a + b;     //arrow function with implicit return
console.log(add_num(5, 3));

const square = x => x*x;          //arrow function with single parameter and implicit return
console.log(square(4));

const greet_word = () => console.log("Hello!");   //arrow function with no parameters
greet_word();    

console.log("practice of function:");
console.log("function to count the number of vowels in a string:");
function vowel_count(str){
    let count=0;
    for(i=0;i<str.length;i++){
        if((str[i]=="a") || (str[i]=="e") || (str[i]=="i") || (str[i]=="o") || (str[i]=="u")){
            count++;
        }
    }
    return count;
}
let str="hello world";
let result=vowel_count(str);
console.log("number of vowels in the string:",result);

console.log("using arrow function to count vowels in a string:");
const count_vowels = str => {
    let count = 0;
    for (let i=0; i<str.length;i++){
        if (["a","e","i","o","u"].includes(str[i].toLowerCase())) {
            count++;
        }
    }
    return count;
};
console.log("number of vowels in the string:", count_vowels("hello world"));

console.log("foreach loop:");
let numbers=[1,2,3,4,5];
numbers.forEach(function(num){
    console.log(num);
});

console.log("using arrow function as callback:");
numbers.forEach(num => console.log(num));   

console.log("using index as parameter in forEach loop:");
numbers.forEach((num,index) => console.log(`index: ${index}, value: ${num}`));   


console.log("print the square of each number in the array using forEach loop:");
let values=[1,2,3,4,5];
values.forEach(function(num){
    console.log(num*num);
});

console.log("some array methods:");
let arr=[1,2,3,4,5];
console.log("map method:");            //it creates a new array by applying a function to each element of the original array.
let squares_arrow=arr.map(num => num*num);
console.log(squares_arrow); 

console.log("filter method:");         //it creates a new array with all elements that pass a test implemented by a provided function.
let even_numbers=arr.filter(num => num%2===0);
console.log(even_numbers);

console.log("filter out the marks of students who scored above 80:");
let marks=[75,82,90,68,95];
let above_80=marks.filter(marks => marks>80);
console.log(above_80);

console.log("reduce method:");         //it executes a reducer function on each element of the array, resulting in a single output value.
let sum_reduce=arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum_reduce);

console.log("sum of all the numbers in an array using reduce method:");
let n=prompt("how many numbers do you want to enter?");
let arr_numbers=[];  
for(i=0;i<n;i++){
    let num=prompt("enter your numbers:");
    arr_numbers.push(Number(num));
}
console.log("array of numbers:", arr_numbers);
let total_sum=arr_numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("sum of all the numbers in the array:", total_sum); 


console.log("find method:");           //it returns the value of the first element in the array that satisfies the provided testing function.
let first_even=arr.find(num => num%2===0);
console.log(first_even);

console.log("some method:");           //it tests whether at least one element in the array passes the test implemented by the provided function.
let has_even=arr.some(num => num%2===0);
console.log(has_even);

console.log("every method:");          //it tests whether all elements in the array pass the test implemented by the provided function.
let all_positive=arr.every(num => num>0);
console.log(all_positive);

console.log("sort method:");           //it sorts the elements of an array in place and returns the sorted array.
let unsorted=[5,2,8,1,4];
unsorted.sort((a,b) => a-b);   //sort in ascending order
console.log(unsorted);
unsorted.sort((a,b) => b-a);   //sort in descending order
console.log(unsorted);



console.log("using arrow function to sort an array of objects by a property:");
let people=[
    {name: "Alice", age: 30},
    {name: "Bob", age: 25},
    {name: "Charlie", age: 35}
];
people.sort((a,b) => a.age - b.age);   //sort by age in ascending order
console.log(people);    


//arrays are used to store multiple values in a single variable. 
// An array is a special variable, which can hold more than one value at a time. 
// It is a data structure that can hold a fixed number of values of the same type. 
// Each item in an array has a unique index, starting from 0 for the first item, 1 for the second item, and so on.
let marks=[45,56,78,98,53,23];            
console.log(marks);
console.log("length of marks:",marks.length);     //property

let heroes=["ironman","batman","spiderman","hunk"];
console.log(heroes);

console.log("looping of an array using for loop:")
let fruits=["apple","mango","litchi","strawberry","pineapple","blueberry"];
for(i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

console.log("find the average marks of the entire class:");
let stu_marks=[85,97,44,37,76,60]
let sum=0;
for(i=0;i<stu_marks.length;i++){
    sum=sum+stu_marks[i];
}
console.log("sum:",sum);
let average=sum/stu_marks.length;
console.log("average:",average);

console.log("find the final price after discount:");
let items=[250,645,300,900,50];
for(i=0;i<items.length;i++){
    let offer=items[i]/10;
    items[i]=items[i]-offer;
}
console.log("items after discount:",items);

console.log("array methods:");
console.log("push method");
let veggies=["potato","tomato","capsicum","peas","cauliflower"];
console.log(veggies);
veggies.push("carrot");             //New elements to add to the array.
//Appends new elements to the end of an array, and returns the new length of the array.
console.log(veggies);

console.log("pop method");
let fruits_item=["apple","mango","litchi","strawberry","blueberry"];
console.log(fruits_item);
fruits_item.pop();             //Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(fruits_item);

console.log("convert array into string");
console.log(veggies);
console.log(veggies.toString());       //to string method is used to convert an array into a string. It returns a string representing the specified array and its elements. The elements are converted to strings and are separated by commas in the resulting string.

console.log("joint multiple arrays");
let bold_colors=["red","purple","blue","orange"];
let light_colors=["pink","yellow"];
let colors=bold_colors.concat(light_colors);           //Additional arrays and/or items to add to the end of the array.
//Combines two or more arrays. This method returns a new array without modifying any existing arrays.
console.log(colors);

console.log("add items to the start");
light_colors.unshift("aquarium");                    //Elements to insert at the start of the array.
//Inserts new elements at the start of an array, and returns the new length of the array.
console.log(light_colors);

console.log("deleted items from the start");
bold_colors.shift();                        //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(bold_colors);

console.log("return piece of the array");
let num=[67,89,34,56,23,67,83,90];
let res=num.slice(3,7);                     //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(res);

console.log("change original array(add,remove,replace)");
let change=num.splice(2,3,34,56,77);                 //The zero-based location in the array from which to start removing elements.Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log(change);



console.log("practice question");
let companies=["bloomberg","microsoft","uber","google","IBM","netflix"];
companies.shift();                          //remove the first company from the array
console.log(companies);

let replace=companies.splice(2,1,"ola");           //remove uber and ola in its place
console.log(companies);

companies.push("amazon");                             //add amazon at the end
console.log(companies);
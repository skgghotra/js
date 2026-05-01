console.log("example of a string:");    //strings are immutable
let str="javascript";
console.log(str);

console.log("find length of a string")
console.log(str.length);

console.log("find index of a string");
console.log(str[2]);

console.log("template literals");  
let specialString=`this is a template literal`;    //Template literals are enclosed by backtick (`) characters instead of double or single quotes.
console.log(specialString);
console.log(typeof specialString);

console.log("example of template literal");
let obj={
    item:"pen",
    price:10
};   
let output=`the cost of ${obj.item} is ${obj.price} rupees. `;  //template literal and ${} called interpoliation and become part of a string
console.log(output);
console.log("the cost of ", obj.item, "is", obj.price, "rupees ");


console.log("string methods");

console.log("toUpperCase:");     //Converts all the alphabetic characters in a string to uppercase.
let upp="javascript";
upp=upp.toUpperCase();
console.log(upp);

console.log("toLowerCase:");   //converts all the alphabetic characters in a string to lowercase. 
let low="JAVASCRIPT";
low=low.toLowerCase();
console.log(low);

console.log("remove whitespaces:");
let space="     java   script        ";
console.log(space.trim());          //Removes the leading and trailing white space and line terminator characters from a string.

console.log("slice method:");
let num="1234567890";
console.log(num.slice(2,5));          //returns a section of a string. The substring includes the characters up to, but not including, the character indicated by end.  //345

console.log("concate string:");
let str1="java";
let str2="script";
let res=str1.concat(str2);
console.log(res);            //Returns a string that contains the concatenation of two or more strings.

console.log("find and replace the string:");
let rep="coffee";
console.log(rep.replace("c","t"));       //Replaces text in a string, using a regular expression or search string.
console.log("find the character in the string:");
let alp="ilovejs";
console.log(alp.charAt(3));       //The zero-based index of the desired character.Returns the character at the specified index.

console.log("example using methods:");
let fullName=prompt("enter your full name");
let userName="@"+fullName+fullName.length;
console.log(userName);
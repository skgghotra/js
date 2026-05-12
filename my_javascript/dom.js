console.log("ways to access DOM elements:");
console.log("accessing DOM elements by id:");
let title=document.getElementById("document1");
console.dir(title);                   
console.log(title);                   

console.log("accessing DOM elements by class name:");
let subtitle=document.getElementsByClassName("document-subtitle");
console.dir(subtitle);
console.log(subtitle);                   

console.log("accessing DOM elements using querySelector:");
let first_subtitle=document.querySelector(".document-subtitle");
console.dir(first_subtitle);
console.log(first_subtitle);

console.log("accessing multiple DOM elements using querySelectorAll:");
let all_subtitles=document.querySelectorAll(".document-subtitle");
console.dir(all_subtitles);
console.log(all_subtitles);              


console.log("properties of DOM elements:");
console.log("textContent:", title.textContent);   

console.log("innerHTML:", title.innerHTML);

console.log("outerHTML:", title.outerHTML);      

console.log("tag name:", title.tagName);           

console.log("innerText:", title.innerText);       


console.log("get and set attributes of DOM elements:");
console.log("id attribute:", title.getAttribute("id"));   
title.setAttribute("data-custom", "customValue");       
console.log("data-custom attribute:", title.getAttribute("data-custom"));

// dom nodes
console.log("DOM nodes:");
console.log("parent node:", title.parentNode);           
console.log("child nodes:", title.childNodes);          
console.log("first child:", title.firstChild);           
console.log("last child:", title.lastChild);             
console.log("next sibling:", title.nextSibling);         
console.log("previous sibling:", title.previousSibling); 








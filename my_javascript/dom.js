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
console.log("id attribute:", title.getAttribute("id"));   //getAttribute returns the value of a specified attribute on the element. If the attribute does not exist, it returns null.
title.setAttribute("data-custom", "customValue");       //setAttribute sets the value of a specified attribute on the element. If the attribute does not exist, it creates a new one with the specified name and value.
console.log("data-custom attribute:", title.getAttribute("data-custom"));

// dom nodes
console.log("DOM nodes:");
console.log("parent node:", title.parentNode);           //parentNode returns the parent node of the specified element in the DOM tree. It allows you to access the parent element of a given node.
console.log("child nodes:", title.childNodes);           //childNodes returns a live NodeList of all child nodes of the specified element, including text nodes and comment nodes. It allows you to access and manipulate the child elements of a given node.
console.log("first child:", title.firstChild);           //firstChild returns the first child node of the specified element in the DOM tree. It allows you to access the first child element of a given node.
console.log("last child:", title.lastChild);             //lastChild returns the last child node of the specified element in the DOM tree. It allows you to access the last child element of a given node.
console.log("next sibling:", title.nextSibling);         //nextSibling returns the next sibling node of the specified element in the DOM tree. It allows you to access the next sibling element of a given node.
console.log("previous sibling:", title.previousSibling); //previousSibling returns the previous sibling node of the specified element in the DOM tree. It allows you to access the previous sibling element of a given node.

//DOM manipulation refers to the process of using JavaScript to interact with and modify the elements of a web page. This can include changing the content, style, or structure of the page in response to user actions or other events.
//manipulating DOM elements
console.log("manipulating DOM elements:");
title.textContent="Updated Document Title";              //Updating the text content of the title element
title.style.color="blue";                                //Changing the color of the title element to blue
title.style.fontSize="24px";                             //Changing the font size of the title element to 24 pixels
title.setAttribute("data-updated", "true");             //Adding a custom attribute to the title element
console.log("Updated title element:", title);   
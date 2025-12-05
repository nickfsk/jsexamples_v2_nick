// DOM Manipulation:
document.body.append("Appended string.");

const pagetitle = document.getElementById("pageTitle");

// 1. element.innerHTML
// Setting HTML markup contained within the element.

// Implement Code here
pagetitle.innerHTML = "<pre>Document Object model: DOM!<pre>";

// 2. element.innerText
// Rendering text content of a node and its descendants.

// Implement Code here
pagetitle.innerText = "document object model".toUpperCase();

// 3. element.style
// Modifying the style of HTML elements

// Implement Code here
pagetitle.style.height = "5rem";
pagetitle.style.color = "#f00";

// 4. getElementById
// refer to the example above (line 4)

// 5. getElementsByTagName
// Using getElementsByTagName method, search for elements that match a tag name

// Implement Code here
const spans = document.getElementsByTagName("span");
const spaninputs = ["props of dom", "methods of dom"];
// Using getElementsByTagName method, search for elements that match a tag's index
// Implement Code here
for (let index = 0; index < spans.length; index++) {
  spans[index].style.display = "block";
  spans[index].style.fontWeight = "bolder";
  spans[index].innerText = spaninputs[index];
}

// 6. createElement
// Adding a new HTML element in JavaScript.

// Implement Code here
const paragraph = document.createElement("p");
paragraph.innerText = "Appended Paragraph";
document.body.append(paragraph);

// 7. querySelector
// Selecting the fist instance of h2 tag and adding an innerText
//* # - QuerySelector recognizes a class
//* . - QuerySelector recognizes a class
// Implement Code here
const header2 = document.querySelector("h2");
header2.innerText = "Heading 2 - tag selector";

const header3 = document.querySelector(".heading3");
header3.innerText = "Heading 3 - Class Selector ";

const header4 = document.querySelector("#heading4");
header4.innerText = "Heading 4 - Id selector";

const inputTxt = document.querySelector('input[type="text"]');
inputTxt.value = "input Selector engaged";

// Using querySelectorAll method, search for elements that match a tag's class

// Implement Code here
const updateListItems = document.querySelectorAll(".menuItem");
// Create a horizontal menu
// Each menu item to be a link with specific styles
const ulMenuBar = document.querySelector("ul");
ulMenuBar.classList.add("d-flex", "pt-4");
ulMenuBar.setAttribute("name", `menubar`);

const menuTitles = ["Welcome", "About", "Product", "Contact"];

menuTitles.forEach((title, index) => {
  // create a list item to append (as a child) to the unordered list
  const listItem = document.createElement("li");
  //listItem.setAttribute("name", `nav-menu-item-${index + 1}`);
  // Create a horizontal menu
  // Each menu item to be a link with specific styles
  const ulMenuBar = document.querySelector("ul");
  ulMenuBar.classList.add("d-flex", "py-4");
  ulMenuBar.setAttribute("name", "menubar");

  const menuTitles = ["Welcome", "About", "Product", "Contact"];

  menuTitles.forEach((title, index) => {
    // create a list item to append (as a child) to the unordered list
    const listItem = document.createElement("li");
    listItem.setAttribute("name", `nav-menu-item`);
    listItem.setAttribute("key", `nav-menu-item-${index + 1}`);
    listItem.classList.add("mx-auto", "list-unstyled");
    ulMenuBar.appendChild(listItem);

    // create an anchor tag to insert into each list item
    const anchor = document.createElement("a");
    anchor.innerText = title;
    anchor.setAttribute("href", "#");
    anchor.setAttribute("name", `nav-link`);
    anchor.classList.add("btn", "btn-success");
    listItem.appendChild(anchor);
  });
  const navbarElement = document.getElementsByName("menuBar");
  navbarElement[0].classList.add("bg-dark");

  const navMenuElements = document.getElementsByName("nav-menu-item");

  for (let index = 0; index < navMenuElements.length; index++) {
    const element = navMenuElements[index];
    element.classList.add("border", "rounded", "border-2");
  }

  
//});









// 8. element.append()
// Adding a new HTML element inside an existing element.
const headerTwoGreeting = document.createElement("h2");
headerTwoGreeting.innerText = "Welcome to the world of JS";


const amendTitle = document.body.appendChild(headerTwoGreeting);

amendTitle.innertext  = "Welcome to the world of JS and CSS";
// Implement Code here

// 9. parentNode.appendChild(node)
// Adding a node using appendChild

// Implement Code here

// ----------------------------------------------
// Refer to ./form/form.html and ./form/script.js
// ----------------------------------------------

// 10. element.setAttribute()
// Setting the Attributes of HTML select input

// 11. element.getAttribute()
// get the Attributes's value(s) of selected options

// 12. element.addEventListener()
// Adding an event listener to a button
});
/* Change the page with JavaScript

Change the text of all paragraphs and headers with javascript
Note:The html must not be changed */

let firstHeader = document.getElementById("myTitle");
firstHeader.innerHTML = ""; // remove the text
firstHeader.innerHTML = "Very cool page :)"; // adding new text

let headers = document.getElementsByTagName("h1");

for(let i =0; i < headers.length; i++){
    headers[i].innerText = "";
    headers[i].innerText= "We are HEADERS 1";
}

let headersThree = document.getElementsByTagName("h3");

for(let i =0; i < headersThree.length; i++){
    headersThree[i].innerText = "";
    headersThree[i].innerText= "We are HEADERS 3";
}

let paragraph = document.querySelector(".paragraph")
paragraph.innerText= "";
paragraph.innerText = "I am paraghraph 1 ";

let secondParagraph = document.querySelector(".paragraph.second"); 
secondParagraph.innerText = "";
secondParagraph.innerText = "I am second paragraph";

let sibiling = secondParagraph.nextElementSibling;
sibiling.innerText = "";
sibiling.innerText = "The new text";


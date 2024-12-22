/* Print all numbers from an array and the sum

Create an array with numbers
Print all numbers from the array in a list element, in the HTML page
Print out the sum of all of the numbers below the list
Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11) */

let numbers = [1,5,10,15,20];
let arrayDiv = document.getElementById("arrayDiv");
arrayDiv.innerHTML += "<ol>";
for(let number of numbers){
    arrayDiv.innerHTML +=`<li>${number}</li>`;
}
arrayDiv.innerHTML +="</ol>"

function sum(elements){
    let sumOfElements = 0;
    let result = "";
    for(let number of elements){
        sumOfElements += number;
        if(number == elements[elements.length-1]){
            result += number;
        }else{

            result += number + "+";
        }
    }
    result += "=" + sumOfElements;
    return result;
}


let myResult = document.getElementById("arrayDiv");
myResult.innerHTML += `<p>This is the rsult ${sum(numbers)} </p>`;
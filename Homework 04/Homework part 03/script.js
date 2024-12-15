/* Write a javascript function that:
When given any array of strings (should work with array with any number of elements)
It will create one big string and return it
Ex:["Hello", "there", "students", "of", "SEDC", "!"]
Result: "Hello there students of SEDC!" */

function concatenate(array) {
  let result = "";
  for (let element of array) {
    if (element == array[array.length - 2]) {
      result += element;
    } else {
      result += element + " ";
    }
  }
  return result;
}

let arrayOfStrings = ["Hello", "There", "students", "of", "SEDC", "!"];
console.log(concatenate(arrayOfStrings));

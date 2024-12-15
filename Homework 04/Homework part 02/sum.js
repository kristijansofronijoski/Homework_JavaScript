/* HOMEWORK #2
Write a function that will take an array of 5 numbers as an argument and return the sum.

Print it in the console or in alert

BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number. If one of the numbers of the array is invalid show an error message instead of a result. */

function validateNumber(number){
    if (isNaN(number)){

        return false;
    } else {
        return true;
    }
}

function sum(array) {
  let result = 0;
  for (let num of array) {
    let validateNumberResult = validateNumber(num);
    if(!validateNumberResult){
        console.error(`This is invalid number`);
        return;
    }
    result += num;
  }
  return result;
}

let numbers = [1, 5, 10, 23, 30, "ana"];
let sumOfNumbers = sum(numbers);
console.log(sumOfNumbers);



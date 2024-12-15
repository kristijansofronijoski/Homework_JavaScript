/* Title: Looping structures

Description: Write a JavaScript function that will return:
The sum of the MAX and MIN numbers from an array with numbers
Ex: arr = [3, 5, 6, 8, 11]
Output: Max: 11, Min: 3, Sum: 14

Bonus: Try making the function work if there are other types of items in it */


// find min

function findMin(arr){
    let min = arr[0];
    for(let num of arr){
        if(min>num){
            min=num;
        }
    } 
    return min;
}

// find max

function findMax(arr){
    let max = arr[0];
    for(let num of arr){
        if(max<num){
            max=num;
        }
    } 
    return max;
}

// sum of two number 

function sumOfTwoNumbers(num1,num2){
    result = num1+num2;
    return result;
}

let arr = [3,4,6,8,11];
let min = findMin(arr);
let max = findMax(arr);
console.log("min: " + min);
console.log("max: " + max);
console.log("The sum of min and max is: " + sumOfTwoNumbers(min,max));
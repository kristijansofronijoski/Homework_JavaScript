/* Title: Looping structures

Description:Write a javascript function that:
When given 2 arrays of students firstNames and lastNames will return a new array with students full names
Every name should have a numeric value before it
Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
Result: full = ["1. Bob Gregory", "2. Jill Wurtz"] */


function fullName(firstNames,lastNames){
    let full = [];
    for(let i = 0; i < firstNames.length; i++){
        full[i]=(i+1) + " " + firstNames[i] + " " + lastNames[i];
    }
    return full;
}

let firstNames = ["Stojko","Joshko"];
let lastNames = ["Stojkoski", "Joshkoski"];
console.log(fullName(firstNames,lastNames));

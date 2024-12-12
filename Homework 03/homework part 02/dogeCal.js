/* Write a JavaScript function that will return:

Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
Note: Call the function in console to see answer
Bonus: Make the same function work for converting dog to human years as well */

function ageCalculation(age){
    rate = 7;
    sum = age * rate;
    return sum;
}

console.log(ageCalculation(2));


// try for bonus xD

function bonus(_age, _isHuman = true){
    rate = 7;

    if(_isHuman){
        dogAge = _age * rate;
        return dogAge;
    } else {
        humanAge = _age / rate;
        return humanAge;
    }
}

console.log(bonus(2));
console.log(bonus(14, false));
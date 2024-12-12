//Write a JavaScript function which accepts a parameter and returns its type and prints it in the console. Try to call the functions 5 times for 5 different types:

function parameterRider(parameter){
    type = (typeof(parameter));
    return type;
}
console.log(parameterRider(3));
console.log(parameterRider(true));
console.log(parameterRider("Repo"));
console.log(parameterRider());
console.log(parameterRider({}));

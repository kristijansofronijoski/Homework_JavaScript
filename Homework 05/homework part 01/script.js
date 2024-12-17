/* Create OBJECT animal with 2 properties and 1 method:
name
kind
speak (method)
this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”

Bonus: enter the values from prompt */

let animal = {
    name: "Johnny",
    kind: "Bulldog",

    speak: function(message){
        console.log(`Dog says: ${message}`);
    }
}

animal.name = window.prompt(`Enter the name of the dog?`);
console.log(`The name of the dog is: ` + animal.name);

animal.kind = window.prompt(`Enter the kind of the animal?`);
console.log(`The kind of the dog is: ` + animal.kind);

let newMessage = window.prompt(`What the dog is saying?`)

animal.speak(newMessage);
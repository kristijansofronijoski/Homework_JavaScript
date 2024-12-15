/* HOMEWORK #1
Create a function called tellStory()

The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )

The function should return one big string with a story made from the arguments

Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.

The value that is returned from the function should be printed in the console or in alert */

// first solution
function tellStory([name, mood, activity]){

    console.log(`This is ${name}. ${name} is a nice person. Today they are in ${mood} mood. They are ${activity} all day. `);   
}

let items = [`Joshko`, `Good`, `Working`];
tellStory(items);

// second solution
function tellStory(arr){

    console.log(`This is ${arr[0]}. ${arr[0]} is a nice person. Today they are in ${arr[1]} mood. They are ${arr[2]} all day. `);   
}

//let items = [`Joshko`, `Good`, `Working`];
tellStory(items);


// Witch one of defining a function is better? :/

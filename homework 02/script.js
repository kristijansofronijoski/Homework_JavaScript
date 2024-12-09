//write javascript code that will get an input from the user and calculate whick chinese zodiac a given year is in
//formula for chinese zodiac calculation: (year - 4) % 12 

let input = prompt(`Enter a year to calculate which chinese zodiac a given year is in`);
let numberInput = parseInt(input);

if((numberInput - 4) % 12 === 0){
    console.log(`It's a Rat!`);
}else if((numberInput - 4) % 12 === 1){
    console.log(`It's an Ox!`);
}else if((numberInput - 4) % 12 === 2){
    console.log(`It's a Tigar!`);
}else if((numberInput - 4) % 12 === 3){
    console.log(`It's a Rabbit!`);
}else if((numberInput - 4) % 12 === 4){
    console.log(`It's a Dragon!`);
}else if((numberInput - 4) % 12 === 5){
    console.log(`It's a Snake!`);
}else if((numberInput - 4) % 12 === 6){
    console.log(`It's a Horse!`);
}else if((numberInput - 4) % 12 === 7){
    console.log(`It's a Goat!`);
}else if((numberInput - 4) % 12 === 8){
    console.log(`It's a Monkey!`);
}else if((numberInput - 4) % 12 === 9){
    console.log(`It's a Rooster!`);
}else if((numberInput - 4) % 12 === 10){
    console.log(`It's a Dog!`);
}else if((numberInput - 4) % 12 === 11){
    console.log(`It's a Pig!`);
}
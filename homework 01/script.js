let phonePrice = 119.95; 
let quantity = 30;
let taxRate = 0.05;

let resultBeforeTax = phonePrice * quantity;

let taxPrice = resultBeforeTax * taxRate;

let totalPrice = resultBeforeTax + taxPrice;

console.log(`The total price for ${quantity} phones is $${totalPrice}`);
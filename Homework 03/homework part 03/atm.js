/* Write a javascript function for an ATM:
The ATM should give cash
Should return "Not enough money" if you request more money
Should return the ammount withdrawn and money left on the account if you have enough
Note: Hardcode your account money in the program
Bonus: Make it work with prompt()! */


function atm(){
    balance = 10000;

    amount = prompt(`How much money do you want to take?`)
    amount = parseInt(amount);

    if(amount <= balance){
        saldo = balance - amount;
        console.log(`You have withdrawn ${amount}, and you have ${saldo} money left`)
    }else {
        console.log(`You have ${balance} in your bank account, sry :/`);
    }
}

atm()
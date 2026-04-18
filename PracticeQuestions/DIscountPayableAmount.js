// Range Question: Discount Payable Amount

const prompt = require("prompt-sync")();

let amount = Number(prompt("What is the final amount ?: "));
let dis;
console.log("Final Amount: " + amount);
if(amount > 0 && amount <5000){
   dis = 0;
} else if(amount >= 5000 && amount <7000){
    dis = 5;
}
 else if(amount >= 7000 && amount <9000){
    dis = 10;
} else if(amount >= 9000){
    dis = 20;
}

console.log("Payable Amount: " + (amount - Math.floor((dis*amount)/100)));
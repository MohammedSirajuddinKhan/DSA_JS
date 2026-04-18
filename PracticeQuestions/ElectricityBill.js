// Electricity Bill Calculator
const prompt = require("prompt-sync")();

let unit = Number(prompt("Enter the number of units consumed: "));
let amount=0;
if(unit > 400){
amount =(unit - 400)*13;
unit =400;
}
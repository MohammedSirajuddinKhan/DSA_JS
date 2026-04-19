// ternary operators are made from the mix of `?` & `:`

console.log(12>13 ? "sahi hai" : "galat hai");

// nested ternary operators
const prompt=require("prompt-sync")();
let num = Number(prompt("Enter a number: "));
console.log(num>0?"Positive":num<0?"Negative":"Zero");

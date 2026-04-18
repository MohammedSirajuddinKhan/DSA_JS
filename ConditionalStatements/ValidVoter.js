const prompt = require("prompt-sync")();
var age = Number(prompt("Enter your age: "));

do{
    console.log("Please enter a valid number for age.");
    age = Number(prompt("Enter your age: "));
} while(isNaN(age));

if(age >= 18){
    console.log("You can vote.");
} else {
    console.log("You cannot vote.");
}

// Normal Swtich case used for checking the value of a variable and executing the code accordingly
let day=1;
switch(day){
case 1:console.log("Monday")
    break;
case 2:console.log("Tuesday");
    break;
default:
    console.log("Invalid day");
}


// Fall through switch case: If we do not use break statement in switch case then it will execute all the cases after the matched case until it finds a break statement or reaches the end of the switch case
let din =1
switch(din){
case 1:console.log("Monday");
case 2:console.log("Tuesday");
default:
    console.log("Invalid day");
}


// Multiple cases in switch case: We can use multiple cases in switch case to execute the same code for different values of a variable
let d = 1;
switch(d){
case 1:
case 2:
case 3:console.log("Sab same hai bhai");
    break;
default:
    console.log("Invalid day");
}


// Switch cases with conditions
let num = 10;
switch(true){
case num>0:console.log("Positive");
    break;
case num<0:console.log("Negative");
    break;
default:
    console.log("Zero");
}



let nm=0.1+0.2.toFixed(1);
console.log(nm);
switch(nm){
case 0.4:console.log("Hello");
    break;
    case 0.3:console.log("Hey");
    break;
default:
    console.log("Namastey Duniya");
}
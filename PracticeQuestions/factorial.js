const prompt=require("prompt-sync")();
var n = Number(prompt("Enter the number: "))

if(n===null){
    console.log("Cancelled");
    
}

if(isNaN(n)){
    console.log("Please enter a valid number!");
}
else{
    if(n>=0){
        var fact=1;
        for(var i=1;i<=n;i++){
            fact=fact*i
        }
        console.log("Factorial of " + n + " is: " + fact);
    }
    else{
        console.log("Please enter a positive number!");
    }}
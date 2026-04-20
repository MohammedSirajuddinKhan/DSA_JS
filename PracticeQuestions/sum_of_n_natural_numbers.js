const prompt=require("prompt-sync")();
var n = Number(prompt("Kahan tak add karvaogey? "))

if(isNaN(n)){
    console.log("Sahi se number dey...!");
}
else{
    if(n>=0){
        var sum=0;
        for(var i=1;i<=n;i++){
            sum=sum+i
        }
        console.log("Sum of first " + n + " natural numbers is: " + sum);
    }
    else{
        console.log("is negative");   
    }}
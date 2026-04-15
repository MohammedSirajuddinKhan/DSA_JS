let a =7
let b=2
//  easy peasy
console.log(a+b);
console.log(a-b);
console.log(a*b);

// this is interesting because division gives answer always in decimal value, even if the answer is a whole number.
console.log(a/b); // this gives us the decimal value "0.6666666666666666"

console.log(Math.floor(a/b));// to avoid decimal, use floor method of Math which gives us the value as "0"

// Left side of "%" is called dividend and right side is called divisor.

console.log(a%b); // gives us remainder

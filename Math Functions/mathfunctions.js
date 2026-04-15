console.log(Math.round(10.6));// rounds the number to the nearest integer, giving us 11 in this case.
console.log(Math.ceil(10.1));// rounds the number up to the nearest integer, giving us 11 in this case.
console.log(Math.floor(10.9));// rounds the number down to the nearest integer, giving us 10 in this case.
console.log(Math.trunc(10.9));// removes the decimal part of the number, giving us 10 in this case.
console.log(Math.pow(5,2));// calculates 5 raised to the power of 2, giving us 25 in this case. (5^2)
console.log(Math.sqrt(16));// calculates the square root of 16, giving us 4 in this case.
console.log(Math.abs(-10));// returns the absolute value of -10, which is 10 in this case.
console.log(Math.max(10,20,5,15));// returns the maximum value among the given numbers, which is 20 in this case.
console.log(Math.min(10,20,5,15));// returns the minimum value among the given numbers, which is 5 in this case.
console.log(Math.random());// generates a random decimal number between 0 (inclusive) and 1 (exclusive).

// OTP EXAMPLE
console.log(Math.trunc(Math.random()*9000+1000)); // generates a random 4-digit number between 1000 and 9999 by multiplying the random decimal by 9000 (to get a range of 0 to 8999) and then adding 1000 (to shift the range to 1000 to 9999). The trunc method is used to remove the decimal part, giving us a whole number.
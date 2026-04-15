// It only works on variables, not on constants or literals.

let a = 11, b = 22
let preincA = ++a // pre-increment: increments a by 1 and then returns the new value of a
let postincA = a++ // post-increment: returns the current value of a and then increments a by 1
let predecB = --b // pre-decrement: decrements b by 1 and then returns the new value of b
let postdecB = b-- // post-decrement: returns the current value of b and then decrements b by 1
console.log(preincA);
console.log(postincA);
console.log(predecB);
console.log(postdecB);

let i = 11;
i=++i + i++;
console.log(i);
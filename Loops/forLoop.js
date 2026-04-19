var i=1
for (;i < 22; i++) {
// console.log(i);
}
// console.log(i + "<--- This value is 22 because the value of i was 22 when the loop was started and the condition checked and broke the loop. The value of i is still 22 when the loop is finished.");

// This is an infinite loop because there is no increment or decrement of j, so the condition will always be true and the loop will never end.
for (var j=1; j < 22;) {
// console.log(j);
}


// This is valid only if the syntax semicolons are correct, JS IS DUMB tbh
for (;;) {
    console.log("Hello");   
} 
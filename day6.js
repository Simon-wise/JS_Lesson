//loops and iteration
//what ias loop in js
// A loop in JavaScript is a programming construct that allows you to execute a block of code repeatedly for a specified number of times or until a certain condition is met. Loops are used to automate repetitive tasks and iterate over data structures like arrays and objects. JavaScript provides several types of loops, including:
// for loop====//
// while loop
// do...while loop
// for...in loop
// for...of loop
// Example of a for loop
let sum = 0;
for (let counter = 1; counter <= 10; counter++) {
    sum = sum + counter;
}
console.log("Sum of numbers from 1 to 10 is: " + sum);

let firstName = "Simon";
for (let index = 0; index < firstName.length; index++) {
    console.log(firstName[index]);
}

//while loop
//while loop is used to repeat a block of code as long as a specified condition is true.
let sum1 = 0;
let step = 1;
while (step <= 10) {
    sum1 += step;
    step++;
}
console.log("Sum of numbers from 1 to 10 using while loop is: " + sum1);

let alive = true;
let life = 10;
while (alive) {
    console.log("You can Eat, Sleep, Code");
    life--;
    if (life <= 0) {
        alive = false;
    }
}

let counter1 = 0;
do {
    console.log("This will execute at least once. Counter: " + counter1);
    counter1++;
} while (counter1 < 5);
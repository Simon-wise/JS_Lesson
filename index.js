// This is my single line comment. It prints "Hello, World!" to the console //
console.log("Hello, World!");

/*
 This is my multi-line comment.
 The following code adds two numbers and prints the result. */
let a = 5;
let b = 10;
let sum = a + b;
console.log("The sum of", a, "and", b, "is:", sum);

// Variable Declaration with let
// Declare `firstName` and `age`, then print them
let firstName = "Simon";
let age = 28;
console.log(firstName, age);

let myCity = "Kampala";
myAddress = "45 Onzivu Strees";
MyPassion = "Codding";

console.log("I am from "+ myCity + ", my address is " + myAddress + ", and my passion is " + MyPassion + ".");

// Create a `score` variable, change it twice, and log each update
let score = 0;
console.log('score initial:', score);
score = 10;
console.log('score updated:', score);
score = 42;
console.log(typeof score);
console.log('score updated again:', score);

// --- Checking Data Types ---
// Declare variables of various primitive types and log their `typeof` results
let stringVar = "hello";
let numberVar = 123;
let booleanVar = true;
let undefinedVar = undefined;
let nullVar = null;

console.log('typeof stringVar =', typeof stringVar);
console.log('typeof numberVar =', typeof numberVar);
console.log('typeof booleanVar =', typeof booleanVar);
console.log('typeof undefinedVar =', typeof undefinedVar);
console.log('typeof nullVar =', typeof nullVar);

// Note: `typeof null` returns 'object' (historical JS quirk).

// --- String concatenation and template literal ---
// Use existing `firstName`, add `lastName`, concatenate to `fullName` and print
let lastName = "Droti";
const fullName = firstName + " " + lastName; // concatenation
console.log('Full name (concatenation):', fullName);

// Template literal that prints the full name
console.log(`Full name (template literal): ${fullName}`);


// --- Arithmetic Operations ---
// Declare two number variables and perform arithmetic operations
let num1 = 15;
let num2 = 4;
console.log('Addition:', num1 + num2);
console.log('Subtraction:', num1 - num2);
console.log('Multiplication:', num1 * num2);
console.log('Division:', num1 / num2);
console.log('Modulus:', num1 % num2);

let item1Price = 1200;
let item2Price = 850;
let item3Price = 430;

console.log(item1Price == item2Price); // false
console.log(item2Price != item3Price);

let totalPrice = item1Price + item2Price + item3Price;
console.log("The total price of the items you purchased is:", totalPrice);
let discount = 15 * totalPrice / 100;
let finalPrice = totalPrice - discount;
console.log("The final price after discount is:", finalPrice);

// --- Boolean examples and simple logic ---
// Create three boolean variables: hasMoney, canPay and hasPaid
let hasMoney = true;
let canPay = false;
let hasPaid = false;

// Use simple logic to output different messages
if (hasMoney && canPay) {
	console.log('Access granted');
} else if (hasMoney && !canPay) {
	console.log('Has money but cannot pay');
} else if (!hasMoney && hasPaid) {
	console.log('No money but already paid');
} else {
	console.log('Access denied');
}

// Evaluate and print the requested logical expressions
console.log('true && false ->', true && false);
console.log('false || true ->', false || true);
console.log('!false ->', !false);

let isRaining;
isShining = true;
console.log("Is it raining? ", isRaining);
console.log("Is it shining? ", isShining);
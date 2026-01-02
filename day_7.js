//Lesson on Functions - Return Statement
//This function takes two numbers as input and returns their sum
function returnSumOfTwoNumbers(number1, number2) {
    let sum = number1 + number2;
    return sum;
}  
let result = returnSumOfTwoNumbers(10, 20);
console.log("Sum of two numbers is: " + result);

//This function welcomes a user by their name and returns the welcome message

function welcomingMessage() {
    console.log("Welcome to the Karibu Grocery Store!");
}
function welcomeUser(userName) {
    let message = "Welcome, " + userName + "!";
    return message;
}
let welcomeMessage = welcomeUser("Alice");
console.log(welcomeMessage);

//This function calculates tax rate
function calculateTax(amount, taxRate) {
    let tax = amount * taxRate;
    return tax;
}
console.log(calculateTax(5000,0.3)); //Using default tax rate

let firstName = "Simon Droti";
console.log(firstName.split(" ",2))

//function to sum multiple numbers
function sumMultipleNumbers() {
    let index = 0; index < arguments.length; index++;
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
let totalSum = sumMultipleNumbers(10, 20, 30, 40, 50);
console.log("Total sum of multiple numbers is: " + totalSum);

//The return statement also exits the function immediately, so any code after the return statement will not be executed.
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
let checkNumber = 0;
let resultCheck = checkEvenOdd(checkNumber);
console.log("The number " + checkNumber + " is: " + resultCheck);   

//Fractional expression of return
function divideNumbers(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
}
let divisionResult = divideNumbers(10, 2);
console.log("Division Result: " + divisionResult);

let divisionByZeroResult = divideNumbers(10, 0);
console.log("Division Result: " + divisionByZeroResult);

//Concide Arror Function with Return
let isNameValid = (name) => {
    return name.length >= 3;
}
let nameToCheck = "Alice";
console.log("Is the name valid? " + isNameValid(nameToCheck));

//filtering an array using arrow function with return
let names = ["John", "Alice", "Bob", "Marry","John", "Charlie"];
let filteredNames = names.filter((name) => name==="John");
console.log("Filtered Names: " + filteredNames);

//Global and Local Scope with Functions
let globalVar = "I am a global variable";

function demonstrateScope() {
    let localVar = "I am a local variable";
    console.log(globalVar); //Global variable accessible here
    console.log(localVar); //Loacal variable accessible here
}
demonstrateScope();
console.log(globalVar);//Global variable accessible here





//Group Assignment with Functions to check if tonnage is true or false (Tonnage=1000kg)
function TonnageValidityCheck(tonnage) {
    if (tonnage >= 1000) {
        return true;
    } else {
        return false;
    }
}
console.log(TonnageValidityCheck(1500));

//arrow function
let isTonnageValid = (tonnage) => {
    return tonnage >= 1000;
}
console.log(isTonnageValid(800));

let showAgeExpression = function() {
    let age = 25;
    return age;
}
console.log(showAgeExpression());

//ternary operator
//ternarry operator is a concise way to write an if-else statement in a single line.
let checkTonnage = (tonnage) => tonnage >= 1000 ? true : false;
console.log(checkTonnage(1200));
//--- IGNORE ---

let ages = [18, 22, 16, 25, 30, 15];
let filteredAges = ages.filter((age) => age >= 18)
console.log(ages);
console.log(filteredAges);
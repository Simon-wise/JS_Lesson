//What are functions?
// Functions are blocks of code that perform specific tasks and can be reused multiple times in a program.
//structure of a function
// function functionName(parameters) {
//     // Function body
// }


// // functionName (Paramenters) {
// //     //Function body
// }
// simple function
function sumNumbers (a, b, c) {
    let sum = a + b + c;
    return sum;
}
console.log(sumNumbers(10, 20, 40));

function kglProduce () {
    let produce = ["Beans", "Grain Maize", "Cow peas", "G-nuts", "SoyaBeans"];
    return produce;
}
console.log(kglProduce());

function divideNumbers () {
    let a = 15;
    let b = 5;
    return a-b;
}
console.log(divideNumbers());

function welcomeUser () {
 let message = "Welcome to your dashboard!";
 return message;
}
console.log(welcomeUser());

function taxRate (amount, rate) {
    let tax = amount * rate;
    return tax;
}
console.log("Your tax rate is: " + taxRate(1000000, .5));

function sumMultipleNumbers () {
    let total = 0;
 for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
 }
 return total;
}

console.log(sumMultipleNumbers(12, 20, 80, 90, 54));

// function
function checkTonnage (weight) {
    let tonnage = weight / 1000;
    return tonnage;
}

console.log(checkTonnage(1000));



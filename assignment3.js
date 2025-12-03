// // let firstName1 = "Uwase";
// // let firstName2 = "uwase";

// // let comparison = (firstName1 !== firstName2);
// // console.log(comparison);

// // let costOfRice = 3000;
// // let customersMoney = 2000;
// // let isReturningCustomer = true;

// // let canPayForRice = customersMoney >= costOfRice && isReturningCustomer;
// // console.log("Can the customer pay for rice?", canPayForRice);

// // let isSunny = false;
// // let isWarm = true;
// // let goForPicnic = isSunny || isWarm;
// // console.log("Should we go for a picnic?", goForPicnic);

// // === */

// let date = new Date();
// localTime = date.toLocaleString();
// console.log(date);
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getDate()+1);
// console.log("Local time is: ", localTime);

// console.log(date.getTime());


// let purchasedDate = new Date('2025-11-15');
// let currentDate = new Date();

// let purchasedTime = currentDate.getTime() - purchasedDate.getTime();
// let daysSincePurchase = Math.floor(purchasedTime / (1000 * 60 * 60 * 24));
// console.log(`Days since purchase: ${daysSincePurchase} days`);

// let shouldCallCustomer = daysSincePurchase >= 20;
// if (shouldCallCustomer) {
//     console.log("It's time to call the customer for feedback.");
// } else {
//     console.log("No need to call the customer yet.");

/*=======Ignore these*/


// --- Comparison Operators and Logical Expressions (Part 1) ---//
let procurementTannage = 1000;
if (procurementTannage>=1000) {
    console.log("Procurement meets the required tonnage.");
} else {
    console.log("Procurement does not meet the required tonnage.");
}

// --- Compare const as a string vs string --- //
let constStrg = "5000";
let constNum = 5000;
let comparisonResult = (constStrg == constNum);
let comparisonResultAnd = (constStrg && constNum);
let comparisonResultOr = (constStrg || constNum);
let comparisonResultNot = (constStrg != constNum);
console.log("Comparison result between string and number:", comparisonResult);
console.log("Logical AND result between string and number:", comparisonResultAnd);
console.log("Logical OR result between string and number:", comparisonResultOr);
console.log("Logical NOT result between string and number:", comparisonResultNot);

// --- VAlidate a record usijng the AND Operator ---//
let dealerName = "John";
let constUgx = 100000;

if (dealerName.length >= 2 && constUgx >= 10000 && constUgx.toString().length > 5) {
    console.log("Dealer record is valid.");
} else {
    console.log("Invalid record.");
}

//---Date Loggoing ---//
let date = new Date();
itemSoldOn = 995536754321;
let soldDate = new Date(itemSoldOn);
console.log("Item sold on:", soldDate.toLocaleString());
// --- End of Date Logging --- //

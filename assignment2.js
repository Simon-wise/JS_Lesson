let dealerName = "John Traders";
let location = "Arua";
let product = "Sugar";
dealerInformation = `Dealer: ${dealerName}, | Location: ${location}, | Product: ${product}.`;
concatinatedInfo = "Dealer: " + dealerName + ", | Location: " + location + ", | Product: " + product + ".";

// --- String concatenation Two different ways but same result. Amazing script ---
// Use existing `firstName`, add `lastName`, concatenate to `fullName` and print
console.log(concatinatedInfo); // concatenation
console.log(dealerInformation); // Template literal that prints the full name

// --- concatinating a number and a string ---
let qty = 25;
let msg = "Your Quantity is: " + qty + " and the quantity is a " + typeof qty;
console.log(msg);

yourInfo="The dealer " + dealerName + " from " + location + " sold " + qty + " bags";
console.log(yourInfo);

let dealer = "Mark";
let city = "Kampala";
let product2 = "Rice";

dealerInformation = `The product ${product2} has been bought by dealer ${dealer} in ${city}.`;
console.log(dealerInformation);

let price = 1200;
let items = 4;
totalCost = `The total cost of your ${product2} is: ${price * items}.`;
console.log(totalCost);

// --- Data Types and typeof operator ---
let score = "85";
let firstName = "Alice";
let isAvailable = true;
let averageScore = 78.5;
console.log(typeof score);
console.log(typeof firstName);
console.log(typeof isAvailable);
console.log(typeof averageScore);

convertedScore = Number(score);
console.log(typeof convertedScore);
score = convertedScore + 10;
console.log('score updated again:', score);

let input = ""; // try changing this to an empty string or null
if (input) {
    console.log("Input is provided.");
} else {
    console.log("No input provided.");
}

let raw = "   hello world   ";
let trimmed = raw.trim();
let upper = trimmed.toUpperCase();
let lower = trimmed.toLowerCase();
console.log(`'${raw}' trimmed is '${trimmed}'`);
console.log(`'${trimmed}' in uppercase is '${upper}'`);
console.log(`'${trimmed}' in lowercase is '${lower}'`);
console.log(`'${raw}' trimmed is now trimmed to '${trimmed}'`);

let store1 = "Karibu Groceries";
if (store1.includes("Gro")) {
    console.log(`The store name '${store1}' contains 'Gro'`);
}
if (store1.startsWith("Kar")) {
    console.log(`The store name '${store1}' starts with 'Kar'`);
}
console.log(`You are shopping at ${store1}`);

let myMsg = "This is a bad product!.";
let cleanedMsg = myMsg.replace("bad", "very good");
console.log(cleanedMsg);

let splitMsg = "sugar-rice-wheat-maize";
let products = splitMsg.split("-");
console.log(products);

let myDealerID = " DEALER-001 ";
let cleanedID = myDealerID.trim().toLowerCase();
console.log(`Cleaned Dealer ID is: ` + cleanedID); 
if (cleanedID === "dealer-001") {
    console.log("Our dealer ID matches expected format.");
}






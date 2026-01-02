// Coursework 2: KGL Inventory Processing System
// Part A: Function Implementation

/*1. Create a file named kgl_functions.js . Write a function named
calculateProcurementCost that: Takes two parameters: tonnageInKg and pricePerKg
Returns the total cost (tonnage × price)
If either parameter is not a number or is less than 0, return the string "Invalid input" */
function calculateProcurementCost(tonnageInKg, pricePerKg) {
    if (typeof tonnageInKg !== 'number' || typeof priceInKg !== 'number' || tonnageInKg <=0 || pricePerKg <=0) {
        return "Invalid input";
    } else {
        return tonnageInKg * pricePerKg;
    }
} 

/* 2. Write an arrow function named validateBuyerName that:
Takes one parameter: buyerName
Returns true if the name length is >= 2 and the name is not empty
Returns false otherwise */
const validateBuyerName = (buyerName) => {
    if (buyerName.length >= 2 && buyerName !== "") {
        return true;
    } else {
        return false;
    }
}
console.log(validateBuyerName("Simon Droti"));

/* 3. Create a function named checkUserAuthorization that:
Takes one parameter: role
Uses a switch statement to check the role
Returns "procurement_and_sales" for 'Manager'
Returns "sales_only" for 'Sales Agent'
Returns "view_aggregations" for 'Director'
Returns "unauthorized" for any other role */
function checkUserAuthorization(role) {
    switch (role) {
        case "Manager":
            return "procurement_and_sales";
            break;
        case "Sales Agent":
            return "sales_only";
            break;
        case "Director":
            return "view_aggregations";
            break;
        default:
            return "unauthorised";
    }
}
console.log(checkUserAuthorization("Director"));

//Part B: Object Creation and Manipulation 
/*4. Create a function createSalesRecord that takes four parameters ( produceName ,
tonnage , buyerName , amountPaid ) and returns an object with the following structure:
{
id: // Generate a random number between 1000-9999
produceName: // parameter value
tonnageInKgs: // parameter value
buyerName: // parameter value
amountPaid: // parameter value
saleDate: // current date using new Date()
isCreditSale: false
} */

function createSalesRecord(produceName, tonnage, buyerName, amountPaid) {
    let id = Math.floor(Math.random() * 9000) + 1000;
    let saleDate = new Date();
    return {
        id: id,
        produceName: produceName,
        tonnageInKgs: tonnage,
        buyerName: buyerName,
        amountPaid: amountPaid,
        saleDate: saleDate,
        isCreditSale: false,
    };
}

console.log(createSalesRecord("Beans", 2000, "Droti Simon", 10000));

/* 5. Create a sales record object by calling your function with test data. Then:
Add a new property branch with value "Maganjo" using dot notation
Modify the isCreditSale property to true
Add a dueDate property using bracket notation
Use Object.keys() to get all property names and log them */

let salesRecord = createSalesRecord("Beans", 2000, "Simon Droti", 10000);
salesRecord.branch = "Maganjo";
salesRecord.isCreditSale = true;
salesRecord["dueDate"] = new Date(2025, 5, 10);
console.log(Object.keys(salesRecord));

/*6. Write a for...in loop that iterates over your sales record object and logs each property
name and value in the format: "Property: [name], Value: [value]" */

for (const key in salesRecord) {
    console.log(`Property: ${key}, Value: ${salesRecord[key]}`);
}

//Part C: Loop Implementation and Data Processing
/*7. Create an array of daily procurement tonnages for a week:
let weeklyTonnage = [1200, 1500, 980, 2000, 1100, 1800, 1300];
Calculates the total tonnage for the week
Calculates the average daily tonnage
Logs both results*/

let weeklyTonnage = [1200, 1500, 980, 2000, 1100, 1800, 1300];
let totalTonnage = weeklyTonnage.reduce((total, tonnage) => total + tonnage, 0);
let averageTonnage = totalTonnage / weeklyTonnage.length;
console.log(`Total tonnage: ${totalTonnage}kg`);
console.log(`Average tonnage: ${averageTonnage}kg`);

/*8. Create an array of sales records (use your createSalesRecord function to create at least 5
records with varying data). Write code using a for...of loop that:
Counts how many credit sales exist ( isCreditSale === true )
Uses the continue statement to skip non-credit sales
Logs "Total credit sales: [count]" */

let salesRecords = [
    createSalesRecord("Beans", 2000, "Droti Simon", 10000),
    createSalesRecord("Beans", 1800, "Rose Mary", 10000),
    createSalesRecord("Beans", 2600, "John T. Kennedy", 15500),
    createSalesRecord("Beans", 3100, "Kalid Juma", 10000),
    createSalesRecord("Beans", 4200, "Christopher Obito", 87000),
];
let creditSalesCount =0;
for (const record of salesRecords) {
    if (record.isCreditSale === true) {
        creditSalesCount++;
    } else {
        continue;
    }
}
console.log(`Total credit sales: ${creditSalesCount}`);

/* 9. Simulate a stock check: Create an inventory array:
let inventory = [
{name: 'Beans', tonnage: 500},
{name: 'Maize', tonnage: 0},
{name: 'G-nuts', tonnage: 300}
]; */

let inventory = [
    { name: "Beans", tonnage: 500 },
    { name: "Maize", tonnage: 0 },
    { name: "G-nuts", tonnage: 300 },
];

/*Use a for loop with a break statement to:
Search for the first item with tonnage === 0
When found, log "Manager Alert: [produce name] is out of stock" and exit the loop
immediately */

for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].tonnage === 0) {
        console.log(`Manager Alert: ${inventory[i].name} is out of stock`);
        break;
    }
}


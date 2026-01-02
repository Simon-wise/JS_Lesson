//Coursework 3: KGL Analytics and Reporting System
//Part A: Higher Order Functions - Data Transformation

/*1. Create a file named kgl_analytics.js . Create an array of at least 6 procurement record
objects with this structure:
{
id: number,
dealerName: string,
produceType: string,
tonnageInKgs: number,
costInUgx: number,
procurementDate: Date object
}
 */
 let procurementRecords = [
    {
        id: 1,
        dealerName: "John",
        produceType: "Beans",
        tonnageInKgs: 1000,
        costInUgx: 50000,
        procurementDate: new Date(),
    },
    {
        id: 2,
        dealerName: "Jane",
        produceType: "Rice",
        tonnageInKgs: 2000,
        costInUgx: 100000,
        procurementDate: new Date(),
    },
    {
        id: 3,
        dealerName: "Bob",
        produceType: "Beans",
        tonnageInKgs: 1500,
        costInUgx: 75000,
        procurementDate: new Date(),
    },
    {
        id: 4,
        dealerName: "Alice",
        produceType: "Rice",
        tonnageInKgs: 2500,
        costInUgx: 150000,
        procurementDate: new Date(),
    },
    {
        id: 5,
        dealerName: "Charlie",
        produceType: "Beans",
        tonnageInKgs: 1200,
        costInUgx: 60000,
        procurementDate: new Date(),
    },
    {
        id: 6,
        dealerName: "David",
        produceType: "Rice",
        tonnageInKgs: 1800,
        costInUgx: 120000,
        procurementDate: new Date(),
    }
];

/*2. Use the .map() method to create a new array where each record includes a new
calculated property costPerKg (costInUgx ÷ tonnageInKgs). The new array should have
objects with the original properties PLUS the new costPerKg property. */

const costPerKg = procurementRecords.map(record => ({
    ...record,
    costPerKg: record.costInUgx / record.tonnageInKgs,
}));

/*3. Use the .filter() method to create a new array containing only procurement records
where:
tonnageInKgs >= 1000 (meeting the minimum requirement for individual dealers)
Log the filtered array and its length */

const filteredRecords = procurementRecords.filter(record => record.tonnageInKgs >= 1000);
console.log(filteredRecords);
console.log(`Number of filtered records: ${filteredRecords.length}`);

/*4. Use the .reduce() method to calculate:
The total tonnage procured across all records
The total cost (sum of all costInUgx values)
Log both totals with appropriate labels using template literals (10 marks) */

const totalTonnage = procurementRecords.reduce((total, record) => total + record.tonnageInKgs, 0);
const totalCost = procurementRecords.reduce((total, record) => total + record.costInUgx, 0);
console.log(`Total tonnage procured: ${totalTonnage}kg`);
console.log(`Total cost: UGX ${totalCost}`);

//Part B: Sets for Unique Data Management (30 marks)
/*5. Create a function getUniqueDealers that:
Takes an array of procurement records as a parameter
Uses a Set to extract all unique dealer names
Returns an array of unique dealer names (convert Set back to array)
Call the function with your procurement data and log the result */

function getUniqueDealers(procurementRecords) {
    const uniqueDealers = new Set(procurementRecords.map(record => record.dealerName));
    return Array.from(uniqueDealers);
}

const uniqueDealers = getUniqueDealers(procurementRecords);
console.log(uniqueDealers);

/*6. Create a Set called authorizedRoles and add these values: 'Manager' , 'Director' .
Write a function isAuthorizedForProcurement that:
Takes a userRole parameter
Uses the .has() method to check if the role exists in the Set
Returns a Boolean
Test the function with different roles and log the results */

const authorizedRoles = new Set(["Manager", "Director"]);

function isAuthorizedForProcurement(userRole) {
    return authorizedRoles.has(userRole);
}

console.log(isAuthorizedForProcurement("Manager")); // true
console.log(isAuthorizedForProcurement("Sales Agent")); // false

/*7. Create a Map called kglPriceList and set the following key-value pairs:
'Beans' → 5500
'Grain Maize' → 4800
'Cow peas' → 6000
'G-nuts' → 7200
'Soybeans' → 5800 */

const kglPriceList = new Map([
    ["Beans", 5500],
    ["Grain Maize", 4800],
    ["Cow peas", 6000],
    ["G-nuts", 7200],
    ["Soybeans", 5800],
]);

/*8. Write a function calculateSaleTotal that:
Takes two parameters: produceName (string) and tonnageInKgs (number)
Uses the Map's .get() method to retrieve the price per kg for that produce
If the produce doesn't exist in the Map, return "Price not found"
Otherwise, return the total sale amount (price × tonnage)
Test with multiple produce types */

function calculateSaleTotal(produceName, tonnageInKgs) {
    const pricePerKg = kglPriceList.get(produceName);
    if (pricePerKg === undefined) {
        return "Price not found";
    } else {
        return pricePerKg * tonnageInKgs;
    }
}

console.log(calculateSaleTotal("Beans", 1000)); // 55000
console.log(calculateSaleTotal("Rice", 500)); // "Price not found"

/*9. Write code that:
Uses a loop to iterate over your kglPriceList Map
For each entry, logs: "Produce: [name], Price per Kg: [price] UgX"
Calculates and logs the highest price in the Map using the .reduce() method on the
Map values */

for (const [produce, price] of kglPriceList.entries()) {
    console.log(`Produce: ${produce}, Price per Kg: ${price} UgX`);
}
const highestPrice = Array.from(kglPriceList.values()).reduce((max, price) => Math.max(max, price), 0);
console.log(`The highest price is: ${highestPrice} UgX`);

//END

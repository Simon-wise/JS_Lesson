//Part A: Declearing Variables
/* 1. Create a file named kgl_validation.js . Declare the following variables using appropriate
keywords ( let or const ):
companyName with the value "Karibu Groceries LTD"
minimumTonnage with the value 1000
isOperational with the value true
managerName (declare but do not assign a value)
closedBranches with the value null */

const companyName = "Karibu Groceries LTD";
const tonnage = 1000;
const isOperational = true;
let managerName;
const closedBranches = null;

//2. Use the typeof operator to check and log the data type of each variable.
console.log("The Data type for companyName is: ", typeof companyName);
console.log("The Data type for tonnage is: ", typeof tonnage);
console.log("The Data type for isOperational is: ", typeof isOperational);
console.log("The Data type for managerName is: ", typeof managerName);
console.log("The Data type for closedBranches is: ", typeof closedBranches);

// This is a single-line comment***
// 3. Write comments (single-line and multiline) explaining why you chose let or const for
// each variable.
// Reason why I used const:
// Here starts a multi-line comment***
/*
1. companyName: Used 'const' because company name may remain the same 
through out the implementation. It's a fixed identifier for the business.

2. minimumTonnage: Used 'const' because minimum requirements may be
   fixed business rules that don't change during runtime.

3. isOperational: Used 'const' for the initial declaration, though in a
   real application this might need to be 'let' if status changes.

4. managerName: Used 'let' because:
   - Manager names can change with time also it has no defined initial value.

5. closedBranches: Used 'const' because while the VALUE (null) is constant,
   in a real application this might reference an array/object that could
   be modified.
*/

//Part B: String maupulation and validation
/*4. Declare a variable dealerNameInput with the value " james BOND " (note the extra
spaces and inconsistent capitalization).*/

const dealerNameInput = " james BOND ";

/*5. Write code that:
Removes the leading and trailing whitespace
Converts the cleaned name to proper title case (first letter of each word capitalized)
Stores the result in a new variable cleanDealerName
Logs the result using a template literal: "Cleaned Dealer Name: [name]" */
const trimmedName = dealerNameInput.trim();
const nameParts = trimmedName.split(' ');
const capitalizedParts = nameParts.map(part => 
    part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
);
const cleanDealerName = capitalizedParts.join(' ');

// Log the cleaned name using template literal
console.log(`\nCleaned Dealer Name: ${cleanDealerName}`);

/*6. Write a validation check using comparison operators to verify that cleanDealerName :
Has a length of not less than 2 characters
Is not empty
Log "Valid dealer name" or "Invalid dealer name" based on the result */
const nameLength = cleanDealerName.length;
const isValidName = nameLength >= 2 && cleanDealerName !== '';

if (isValidName) {
    console.log("Valid dealer name");
} else {
    console.log("Invalid dealer name");
}

//Part C: Conditional Logic and Business Rules
/*7. Create variables for a procurement record:
let userRole = 'Sales Agent'; let procurementTonnage = 1500; let produceType = 'Beans';
let costInUgx = '50000';
 */
let userRole = 'Sales Agent';
let procurementTonnage = 1500;
let produceType = 'Beans';
let costInUgx = '50000';

/*8. Implement the following KGL business rules using if...else if...else statements:
Rule 1: No sales agent is allowed to record any produce entry. If userRole is 'Sales
Agent', log an error message and do NOT proceed with the other checks.
Rule 2: For individual dealers, tonnage must be not less than 1000kg. Check if
procurementTonnage >= 1000 .
Rule 3: The cost must be not less than 5 digits. First convert costInUgx to a Number
type, then check if it's >= 10000. */
if (userRole === 'Sales Agent') {
    console.log('Error: You cannot record produce entries. Sales agents are not allowed to record produce entries')
} else {
    const isTonnageValid = procurementTonnage >= 1000;
    const numericCost = Number(costInUgx);
    const isCostValid = !isNaN(numericCost) && numericCost >= 10000;

    console.log(`Tonnage validation: ${isTonnageValid ? 'Pass' : 'Fail'} (${procurementTonnage}kg)`);
    console.log(`Cost validation: ${isCostValid ? 'Pass' : 'Fail'} (UGX ${numericCost})`);

/* 9. Use the logical AND ( && ) operator to create a single Boolean expression that checks if
BOTH tonnage and cost conditions are met, and log "Procurement record valid" or
"Procurement record invalid". */
    if (isTonnageValid && isCostValid) {
        console.log('The buyer record is valid.');
    } else {
        console.log('The buyer record is invalid.');
    }
    
}

//Part D: Arrays and Produce Management
/* 10. Create an array named kglProduce containing the five types of produce: ['Beans',
'Grain Maize', 'Cow peas', 'G-nuts', 'Soybeans'] */
const kglProduce = ['Beans', 'Grain Maize', 'Cow peas', 'G-nuts', 'Soyabeans'];

/* 11. Write code that:
Adds a new produce type "Green Peas" to the end of the array
Removes the first item from the array (simulate oldest stock being sold)
Checks if "G-nuts" exists in the array using an appropriate array method
Logs the final array and its length */
kglProduce.push('grean peas');
kglProduce.shift();
kglProduce.includes('G-nuts');
console.log(kglProduce);
console.log(kglProduce.length);

/* 12. Create a second array branch2Produce with values ['Maize', 'Beans'] . Use the
.concat() method to merge kglProduce and branch2Produce into a new array called
allProduce */
const branch2Produce = ['Maize', 'Beans'];
const allProduce = kglProduce.concat(branch2Produce);
console.log(allProduce);

//END PART 1



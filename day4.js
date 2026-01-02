// // let isLoggedIn = true;

// // if (!isLoggedIn) {
// //     console.log("You are not logged in.");
// // } else {
// //     console.log("User is logged in.");
// // }

// let roles = "admin" || "Sales Agent" || "Accountant";
// let userRole = "Accountant";
// let previlages = "read" || "write" || "delete"; "update";
// let adminPrevilages = "update";

// if (roles === "admin" && adminPrevilages === "write") {
//     console.log("Admin has write previlages. Access granted to add to admin panel.");
// } else if (roles === "admin" && (adminPrevilages === "read" || previlages === "write")) {
//     console.log("Admin has read or write previlages. Limited access granted.");
// } else if (roles === "admin" && adminPrevilages === "update") {
//     console.log("Admin has update previlages. Access granted to update records.");
// } else {
//     console.log("Access denied. Insufficient previlages.");
// }

// // --- Switch Statement for User Roles --- //
// switch (userRole) {
//     case "admin":
//         console.log("User is an admin. Full access granted.");
//         break;
//     case "Sales Agent":
//         console.log("User is a Sales Agent. Access to sales data granted.");
//         break;
//     case "Accountant":
//         console.log("User is an Accountant. Access to financial records granted.");
//         break;
//     default:
//         console.log("User role not recognized. Access denied.");
// }

// //using switch for produce price check
// let produce = "";
// switch (produce) {
//     case "Bananas":
//         console.log("The price of Bananas is $1.50 per kg.");
//         break;
//     case "Mangoes":
//         console.log("The price of Mangoes is $2.00 per kg.");
//         break;
//     case "Pineapples":
//         console.log("The price of Pineapples is $3.00 per kg.");
//         break;
//     default:
//         console.log("Produce not found in the price list.");
// }

// //ternary operator
// let userNationality = "Kenyan";
// let currency = userNationality === "Ugandan" ? "UGX" : "USD";
// console.log(`The currency for a ${userNationality} user is: ${currency}`);

// let isManager = true;
// let accessLevel = isManager ? "Full Access" : "Limited Access";
// console.log(`User is granted: ${accessLevel}`);



//==*Assignmet for Day 4.js==*//
let userRole = "Director" || "Manager" || "Sales Agent";
let role = "Director";
if (userRole === "Director" && role === "Director") {
    console.log("Director has full access to all records.");
} else if (userRole === "Manager" && role === "Manager") {
    console.log("Manager has access to managerial records.");
} else if (userRole === "Sales Agent" && role === "Sales Agent") {
    console.log("Sales Agent has access to sales records.");
}   else {
    console.log("Access denied. Role not recognized.");
}

// --- Second Task --- //
let buyerName = "Alice";
amountdue = 20000;
productName = "Rice";

if (buyerName.length >= 2 && amountdue >= 10000 && productName !== "") {
    console.log("The buyer record is valid.");
} else {
    console.log("The buyer record is invalid.");
}

// --- Using switch Assignment --- //
let procurementType = "Beans";
switch (procurementType) {
    case "Beans":
        console.log("The price of Beans is $2.50 per kg.");
        break;
    case "G-Nuts":
        console.log("The price of G-Nuts is $1.80 per kg.");
        break;
    case "Soya Bean":
        console.log("The price of Soya Bean is $4.45 per kg");
        break;
    default: ("It's an invalid input");
}
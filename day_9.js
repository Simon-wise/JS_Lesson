//objects and iteration
// An object in JavaScript is a collection of key-value pairs, 
// where each key (also known as a property) is a string (or symbol) that maps to a value. 
// The value can be of any data type, including numbers, strings, arrays, functions, or even other objects. 
// Objects are used to represent real-world entities and organize related data and functionality together.
// An object is a keyed colletion of various data and functionality.
let product = {
    name: "Milk",
    weight: 50,
    price: 2500,
    purchaseBy: "Simon",
    purchaseDate: new Date(2024, 5, 10),
    isAvailable: true,
    displayInfo: function() {
        return `Product: ${this.name}, Weight: ${this.weight}kg, Price: $${this.price}`;
    },
    deletedBy: "Kevin",
    currency: "UGX",
};
// Accessing object properties and methods
// let productInfo = product.displayInfo();
// console.log(productInfo);
// console.log(product.purchaseDate);

// product.currency = "USD"; // Modifying existing property
// product.expiryDate = new Date(2025, 5, 10); // Adding new property
// console.log("Updated Currency:", product.currency);
// console.log("Expiry Date:", product.expiryDate);

// for (const keysOfProduct in product) {
//     console.log(keysOfProduct)
//     console.log(product[keysOfProduct])
// }

// console.log(Object.entries(product))

//Practice Exercise
let salesRecord = {
    productName: "Maize",
    tonnageInKgs: 250,
    amountPaid: 520000,
    buyersName: "John",
}

//check data type of items in the object
for (const key in salesRecord) {
    const expectedType = expectedType[key];
    const actualType = 
}

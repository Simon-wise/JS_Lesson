//working with indices in an array
let users = [
    "John", 
    "Tom", 
    "Hanana", 
    "Sally", 
    "Job", 
    "Mary", 
    "Sam"
];

// console.log(users[2]); // Accessing the third element (Hanna)
// console.log(users.length); // Accessing the length of the array

// users[3] = "Hannah"; // Modifying the fourth element
// console.log(users);

// users[1] = `${users[1]} Smith`; // Modifying the second element by appending a surname
// console.log(users);

// users.push("Peter"); // Adding a new element to the end of the array
// console.log(users);

// users.unshift("Lucy"); // Adding a new element to the beginning of the array
// console.log(users);

// // Removing the last element from the array
// users.pop();
// console.log(users);

// users.shift(); // Removing the first element from the array
// console.log(users);

// let deletedUsers = users.splice(4, 4); // Removing the third element from the array
// console.log(deletedUsers);



// let indexOfJob = users.indexOf("Job"); // Finding the index of a specific element
// console.log("The index of Job is: " + indexOfJob);

// let doesJobExist = users.includes("Job"); // Checking if an element exists in the array
// console.log("Does Job exist in the array? " + doesJobExist);

// users.push("Job"); // Adding a duplicate element to demonstrate indexOf and lastIndexOf
// console.log(doesJobExist);

// let lastIndexOfJob = users.lastIndexOf("Job"); // Finding the last index of a specific element
// console.log("The last index of Job is: " + lastIndexOfJob);


// let age = [13,23,45,56,67,78,89,90];

// let indexOf13YrOlds = age.indexOf(13);
// console.log("The index of 13 year olds is: " + indexOf13YrOlds);

// let do45YrOldsExist = age.includes(45);
// console.log("Do 45 year olds exist in the array? " + do45YrOldsExist);

// age.reverse(); // Reversing the array
// console.log(age);

// age.sort(function(a, b) {
//     return a - b;
// }); // Sorting the array in ascending order
// console.log(age);

// let sortedAges = age.toSorted(); // Storing the sorted array in a new variable
// console.log(sortedAges);
// console.log(age); // Original array remains unchanged


//exercising array methods
let kglProduce = ["Beans", "Grain Maize", "Cow peas", "G-nuts", "SoyaBeans"];
kglProduce = kglProduce.concat("Green peas"); // Adding green peas to the end of the array
console.log(kglProduce);
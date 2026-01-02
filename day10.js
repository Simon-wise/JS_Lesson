// //using forEach loop
// function execute(action) {
//     let element
//     let index
//     console.log(action())
// }


// let produce = ["beans", "Maize", "Rice", "TOmato"]
// let emails = ["abc@gmail.com", "ads@gmail.com", "gfd@gmail.com"]

// function sendMail(emailAddress) {
//     console.log('Email send successfully ${emailAddress}')

// }

// produce.forEach(product,index)=>{
//     console.log(`${product} is index number ${index}`)
// }

// let emails.map

// let ages = [23, 45, 32, 22, 12, 45]

// let filteredAges = ages.filter((age)=>age<=25)
// console.log(ages)
// console.log(filteredAges)

// let sales = [
//     {customerName : "Simon", isCreditSale : true, amount :10_000},
//     {customerName : "Tom", isCreditSale : false, amount :15_000},
//     {customerName : "Alain", isCreditSale : true, amount :20_000},
//     {customerName : "Grace", isCreditSale : false, amount :55_000},
//     {customerName : "Daniel", isCreditSale : true, amount :100_000},
//     {customerName : "Anim", isCreditSale : false, amount :10_000},
// ]

// let filteredSales = sales.filter((sales)=> sales.amount>15000 && sales.isCreditSale===true)

// console.log(filteredSales)

//Reduce Syntax

// let sum = ages.reduce((sum,age)=> {
//     return sum+age
// },0)

// console.log(sum)

// let donations = [
//     {donor:"Paul",amount:500},
//     {donor:"James",amount:100},
//     {donor:"Grace",amount:200},
//     {donor:"Kim",amount:4500},
//     {donor:"Moss",amount:700},
// ]

// let receivedDonations = donations.reduce((myDonors,donor)=>{
//     return myDonors+donor.amount
// },5000)

// console.log(`We have so far collected: ${receivedDonations} USD to our target of 50,000 USD`)

// //Exercise
// let amountPaid = [
//     {product:"Rice",amount:700},
//     {product:"Beans",amount:1500},
//     {product:"Millet",amount:2200},
//     {product:"Potato",amount:4500},
//     {product:"Peas",amount:7200},
// ]

// const collectedRevenue = amountPaid.reduce((product,value)=>{
//     return product + value.amount;
// },0)

// console.log(`Total revenue collected is: UGX${collectedRevenue}`)

//Using the map
// let priceList = [
//     ["Rice", 2000],
//     ["Millet", 1_900],
//     ["Maize", 2700],
//     ["Grains", 3600],
//     ["G-Nuts", 4600],
//     ["Peas", 500],
// ]
// const prices = new Map(priceList)

// prices.set("Rice",5000)

// console.log(prices)
// console.log(prices.get("Beans"))

// console.log(prices.get(23))

//
let dealerList = [
    {"dealer": "James", product: "Maize"},
    {"dealer": "Jacobs", product: "Millet"},
    {"dealer": "Tom", product: "Maize"},
    {"dealer": "Marry", product: "Sogurm"},
    {"dealer": "Kim", product: "Kassava"},
    {"dealer": "Grace", product: "G-Nut"},
]
const uniqueName = new set(user)

let customer =names.map((user)=>dealerList.dealers)
console.log(uniqueName)

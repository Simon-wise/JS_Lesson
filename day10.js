//using forEach loop
function execute(action) {
    let element
    let index
    console.log(action())
}


let produce = ["beans", "Maize", "Rice", "TOmato"]
let emails = ["abc@gmail.com", "ads@gmail.com", "gfd@gmail.com"]

function sendMail(emailAddress) {
    console.log('Email send successfully ${emailAddress}')

}

produce.forEach(product,index)=>{
    console.log(`${product} is index number ${index}`)
}

let 
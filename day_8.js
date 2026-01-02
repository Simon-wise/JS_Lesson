// --- Boolean examples and simple logic ---
// Create three boolean variables: hasMoney, canPay and hasPaid
let hasMoney = true;
let canPay = false;
let hasPaid = false;

// Use simple logic to output different messages
if (hasMoney && canPay) {
  console.log('Access granted');
} else if (hasMoney && !canPay) {
  console.log('Has money but cannot pay');
} else if (!hasMoney && hasPaid) {
  console.log('No money but already paid');
} else {
  console.log('Access denied');
}

// Evaluate and print the requested logical expressions
console.log('true && false ->', true && false);
console.log('false || true ->', false || true);
console.log('!false ->', !false);

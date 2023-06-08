let rlsync = require('readline-sync');

let number1 = rlsync.question("Enter the first number: ");
let number2 = rlsync.question("Enter the second number: ");

console.log(`The sum of both the numbers is ${Number(number1) + Number(number2)}`);

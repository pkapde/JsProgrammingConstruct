// 1) Use REPL – Random Function Math.floor(Math.random() * 10); to get Single Digit.
let singleDigit=Math.floor(Math.random()*10);
console.log("single digit :"+singleDigit);

// 2) Use REPL – Use Random to get Dice Number between 1 to 6
let diceNumber=(Math.floor(Math.random()*10)%6)+1;
console.log("Random number :"+diceNumber);

// 3) Use REPL – Add two Random Dice Number and Print the Result
let diceNumber1=(Math.floor(Math.random()*10)%6)+1;
let diceNumber2=(Math.floor(Math.random()*10)%6)+1;
console.log("Addition of two random numbers :"+(diceNumber+diceNumber2));

// 4. Use Script & Debug – Write a program that reads 5 random 2-digit values, then find their sum and the average.
const prompt = require('prompt-sync')({ sigint: true });
console.log("\nEnter 5 random 2-digit numbers to calculate their sum and average:");
const num1 = Number(prompt("num1: "));
const num2 = Number(prompt("num2: "));
const num3 = Number(prompt("num3: "));
const num4 = Number(prompt("num4: "));
const num5 = Number(prompt("num5: "));
let sum = num1 + num2 + num3 + num4 + num5;
console.log("Sum of 5 random 2-digit values: " + sum);
console.log("Average of 5 random 2-digit values: " + (sum / 5));
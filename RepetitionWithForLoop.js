const prompt = require('prompt-sync')({ sigint: true });

// 1. Write a program that takes a command-line argument n and prints a table of the powers of 2 that are less than or equal to 2^n.
console.log("Powers of 2 less than or equal to 2^n are:");
const n1 = Number(prompt("Enter a non-negative integer (i.e. 'n' value): "));
if (n1 >= 0 && Number.isInteger(n1)) {
    for (let i = 0; i <= n1; i++) {
        console.log("2^" + i + " = " + Math.pow(2, i));
    }
} else console.log("Enter only non-negative integers.");

// 2. Write a program that takes a command-line argument n and prints the nth harmonic number.
console.log("\nTo get nth harmonic number:");
const n2 = Number(prompt("Enter a positive integer (i.e. 'n' value): "));
if (n2 >= 1 && Number.isInteger(n2)) {
    let ans = 0;
    for (let i = 1; i <= n2; i++) {
        ans += Math.pow(i, -1);
    }
    console.log("The harmonic number is: " + ans);
} else console.log("Enter only positive integers.");

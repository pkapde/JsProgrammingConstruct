
// 1. Write a program that reads 5 random 3-digit values and then outputs the minimum and the maximum value.
const prompt = require('prompt-sync')();
{
let number=Number(prompt("Enter the number(0-5) :"));
if(number == 0)
    console.log("Zero.");
else if(number == 1)
    console.log("One.");
else if(number == 2)
    console.log("Two.");
else if(number == 3)
    console.log("Three.");
else if(number == 4)
    console.log("Four.");
else if(number == 5)
    console.log("Five.");
else
    console.log("Wrong input.");
}

// 2. Write a program that takes day and month from the command line and prints true if  day of month is between March 20 and June 20, false otherwise.
console.log("\nTo check if day of month given as input by user is between March 20 and June 20:");
const day = prompt("Enter any day of the month: ");
const month = prompt("Enter any month of the year: ");
let check;
if ((month === "March" && day >= 21 && day <= 31) || (month === "April" && day >= 1 && day <= 30)
    || (month === "May" && day >= 1 && day <= 31) || (month === "June" && day >= 1 && day <= 19))
    check = true;
else check = false;
console.log("Day of Month is between March 20 and June 20: " + check);

// 3. Write a program that takes a year as input and outputs the year is a Leap Year or not a Leap Year.
// A Leap Year checks for 4-digit Number, divisible by 4 and not 100 unless divisible by 400.
console.log("\nEnter a 4-digt year to check if Leap Year or not:");
const year = Number(prompt("Enter year: "));
if (year >= 1000 && year <= 9999) {
    if ((year % 4 === 0 && year % 100 != 0) || (year % 400 === 0)) console.log("It's a leap year.");
    else console.log("It's a non-leap year.");
}
else console.log("User-input is not a 4-digit year.");

// 4. Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.
console.log("\nTo check heads or tails for a coin-flip using random function:")
const toss = Math.floor(Math.random() * 10) % 2, Heads = 0;
if (toss === Heads) console.log("It's Heads.");
else console.log("It's Tails.");

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

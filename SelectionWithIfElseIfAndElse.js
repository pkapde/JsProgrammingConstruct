const prompt = require('prompt-sync')({ sigint: true });

// 1. Read a single digit number and write the number in word.
console.log("\nEnter a single-digit number to get its word-format:");
const num = Number(prompt("num: "));
let numWord;
if (num >= 0 && num <= 9) {
    if (num == 0) numWord = "Zero";
    else if (num == 1) numWord = "One";
    else if (num == 2) numWord = "Two";
    else if (num == 3) numWord = "Three";
    else if (num == 4) numWord = "Four";
    else if (num == 5) numWord = "Five";
    else if (num == 6) numWord = "Six";
    else if (num == 7) numWord = "Seven";
    else if (num == 8) numWord = "Eight";
    else if (num == 9) numWord = "Nine";
    console.log("Your entered number in word is: " + numWord);
}
else console.log("Invalid user input.");

// 2. Read a number and display the week day (Sunday, Monday,…).
console.log("\nEnter a digit to get the week-day:");
const weekNum = Number(prompt("week number: "));
let weekDay;
if (weekNum >= 0 && weekNum <= 6) {
    if (weekNum == 0) weekDay = "Sunday";
    else if (weekNum == 1) weekDay = "Monday";
    else if (weekNum == 2) weekDay = "Tuesday";
    else if (weekNum == 3) weekDay = "Wednesday";
    else if (weekNum == 4) weekDay = "Thursday";
    else if (weekNum == 5) weekDay = "Friday";
    else if (weekNum == 6) weekDay = "Saturday";
    console.log("Your entered number equals the weekday: " + weekDay);
}
else console.log("Invalid user input.");

// 3. Read a number 1, 10, 100, 1000, etc and display unit, ten, hundred,…
console.log("\nEnter a number of this form 1, 10, 100, 1000, etc:");
const number = Number(prompt("number: "));
let numValue;
if (number == 1) numValue = "Unit";
else if (number == 10) numValue = "Ten";
else if (number == 100) numValue = "Hundred";
else if (number == 1000) numValue = "Thousand";
else if (number == 10000) numValue = "Ten Thousand";
else if (number == 100000) numValue = "Lakh";
else if (number == 1000000) numValue = "Ten Lakh";
else if (number == 10000000) numValue = "Crore";
else if (number == 100000000) numValue = "Ten Crore";
else if (number == 1000000000) numValue = "Hundred Crore";
else console.log("Invalid user input.");
console.log("Your entered number is: " + numValue);
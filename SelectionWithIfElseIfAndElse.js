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
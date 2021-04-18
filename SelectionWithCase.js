const prompt = require('prompt-sync')({ sigint: true });

// 1. Read a single digit number and write the number in word using switch-case
console.log("\nEnter a single-digit number to get its word-format:");
const num = Number(prompt("num: "));
let numWord;
switch (num) {
    case 0: numWord = "Zero"; break;
    case 1: numWord = "One"; break;
    case 2: numWord = "Two"; break;
    case 3: numWord = "Three"; break;
    case 4: numWord = "Four"; break;
    case 5: numWord = "Five"; break;
    case 6: numWord = "Six"; break;
    case 7: numWord = "Seven"; break;
    case 8: numWord = "Eight"; break;
    case 9: numWord = "Nine"; break;
    default: console.log("Invalid user input.");
}
console.log("Your entered number in word is: " + numWord);

// 2. Read a number and display the week-day (Sunday, Monday,…)
console.log("\nEnter a digit to get the week-day:");
const weekNum = Number(prompt("week number: "));
let weekDay;
switch (weekNum) {
    case 0: weekDay = "Sunday"; break;
    case 1: weekDay = "Monday"; break;
    case 2: weekDay = "Tuesday"; break;
    case 3: weekDay = "Wednesday"; break;
    case 4: weekDay = "Thursday"; break;
    case 5: weekDay = "Friday"; break;
    case 6: weekDay = "Saturday"; break;
    default: console.log("Invalid user input.");
}
console.log("Your entered number equals the weekday: " + weekDay);

// 3. Read a number 1, 10, 100, 1000, etc and display unit, ten, hundred,…
console.log("\nEnter a number of this form 1, 10, 100, 1000, etc:");
const number = Number(prompt("number: "));
let numValue;
switch (number) {
    case 1: numValue = "Unit"; break;
    case 10: numValue = "Ten"; break;
    case 100: numValue = "Hundred"; break;
    case 1000: numValue = "Thousand"; break;
    case 10000: numValue = "Ten Thousand"; break;
    case 100000: numValue = "Lakh"; break;
    case 1000000: numValue = "Ten Lakh"; break;
    case 10000000: numValue = "Crore"; break;
    case 100000000: numValue = "Ten Crore"; break;
    case 1000000000: numValue = "Hundred Crore"; break;
    default: console.log("Invalid user input.");
}
console.log("Your entered number is: " + numValue);
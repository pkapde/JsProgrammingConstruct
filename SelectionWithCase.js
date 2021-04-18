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
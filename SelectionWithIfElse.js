
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

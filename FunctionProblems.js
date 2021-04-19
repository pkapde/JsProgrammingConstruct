const prompt = require('prompt-sync')({ sigint: true });

// 1. Help user find degF or degC based on their conversion-selection. Use case-statement and ensure that the inputs are within the freezing-point ( 0 °C / 32 °F ) and the boiling-point of water ( 100 °C / 212 °F )
// 1.a. degF = (degC * 9/5) + 32 
// 1.b. degC = (degF - 32) * 5/9
console.log("\nCelsius and Fahrenheit temperature conversions:\nMake a choice:\n1. °C to °F\n2. °F to °C");
let choice = Number(prompt("Your choice: "));

function degCtoDegF(degC) {
    return (degC * 9 / 5) + 32;
}

function degFtoDegC(degF) {
    return (degF - 32) * 5 / 9;
}

switch (choice) {
    case 1: {
        let degC = Number(prompt("Enter temperature in °C (within 0°C and 100°C) for conversion: "));
        if (degC >= 0 && degC <= 100) {
            let degF = degCtoDegF(degC);
            console.log(`${degC}°C = ${degF}°F`);
        }
        else console.log("Your input must be within 0°C and 100°C.");
        break;
    }
    case 2: {
        let degF = Number(prompt("Enter temperature in °F (within 32°F and 212°F) for conversion: "));
        if (degF >= 32 && degF <= 212) {
            let degC = degFtoDegC(degF);
            console.log(`${degF}°F = ${degC}°C`);
        }
        else console.log("Your input must be within 32°F and 212°F.");
        break;
    }
    default:
        console.log("Invalid choice.");
}

// 2) Write a function to check if the two numbers are Palindromes.
{
    let number=Number(prompt("Enter number to check palindrome or not : "));

    function palindromeOrNot(number){
        let num=number;
        let reversed=0;
        while(num != 0){
            let remainder=num%10;
            reversed=reversed*10+remainder;
            num=Math.floor(num/10);
        }
        if(number == reversed)
            console.log(number+" is a palindrome number.");
        else
            console.log(number+" is not a palindrome number.");
    }
    palindromeOrNot(number);
}
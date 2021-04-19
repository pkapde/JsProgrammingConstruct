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

// 3) Take a number from user and check if the number is a Prime then show that its palindrome is also prime
// a. Write function check if number is Prime
// b. Write function to get the Palindrome.
// c. Check if the Palindrome number is also prime
{
    let number=Number(prompt("Enter the number :"));
    primeOrNot(number);
    palindromeOrNot(number);
    function primeOrNot(number){
        let flag=1;
        for(let i=2;i<=(number/2);i++)
            if(number % i == 0){
                flag=0;
                break;
            }
        if(number == 1)
            console.log("1 is not a prime number.");
        if(flag ==0)
            console.log(number+" is not a prime number.");
        else
            console.log(number+" is a prime number.");
    }
    function palindromeOrNot(number){
        let num=number;
        let reversed=0;
        while(num != 0){
            let remainder=num%10;
            reversed=reversed*10+remainder;
            num=Math.floor(num/10);
        }
        if(number == reversed){
            console.log(number+" is a palindrome number.");
            primeOrNot(reversed);
        }
        else
            console.log(number+" is not a palindrome number.");
    }
}
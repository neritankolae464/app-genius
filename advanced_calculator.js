/*
   Filename: advanced_calculator.js
   
   Description: This code represents an advanced calculator with various mathematical operations. 
   It includes functions for addition, subtraction, multiplication, division, square root, exponentiation, 
   factorial, and modulus. The calculator also has memory functionality to store and retrieve values.
   
   Author: [Your Name]
*/

// Memory variable to store calculations
let memory = 0;

// Addition operation
function add(num1, num2) {
    return num1 + num2;
}

// Subtraction operation
function subtract(num1, num2) {
    return num1 - num2;
}

// Multiplication operation
function multiply(num1, num2) {
    return num1 * num2;
}

// Division operation
function divide(num1, num2) {
    if (num2 !== 0) {
        return num1 / num2;
    } else {
        throw "Error: Cannot divide by zero!";
    }
}

// Square root operation
function squareRoot(num) {
    if (num >= 0) {
        return Math.sqrt(num);
    } else {
        throw "Error: Invalid input!";
    }
}

// Exponentiation operation
function power(base, exponent) {
    return Math.pow(base, exponent);
}

// Factorial operation
function factorial(num) {
    if (num >= 0) {
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    } else {
        throw "Error: Invalid input!";
    }
}

// Modulus operation
function modulus(num1, num2) {
    if (num2 !== 0) {
        return num1 % num2;
    } else {
        throw "Error: Cannot divide by zero!";
    }
}

// Function to store a value in memory
function memoryStore(value) {
    memory = value;
}

// Function to retrieve the value stored in memory
function memoryRetrieve() {
    return memory;
}

// Main code execution
console.log("Advanced Calculator\n");

console.log("Addition:");
console.log(add(5, 3));

console.log("\nSubtraction:");
console.log(subtract(10, 4));

console.log("\nMultiplication:");
console.log(multiply(7, 6));

console.log("\nDivision:");
console.log(divide(15, 3));

console.log("\nSquare Root:");
console.log(squareRoot(25));

console.log("\nExponentiation:");
console.log(power(2, 4));

console.log("\nFactorial:");
console.log(factorial(5));

console.log("\nModulus:");
console.log(modulus(17, 4));

console.log("\nMemory Functionality Demo:");

memoryStore(10);
console.log("\nValue stored in memory: " + memoryRetrieve());

console.log("\nAdding 25 to the memory value:");
memoryStore(memory + 25);
console.log("Updated value stored in memory: " + memoryRetrieve());

console.log("\nSubtracting 7 from the memory value:");
memoryStore(memory - 7);
console.log("Updated value stored in memory: " + memoryRetrieve());

// More code...
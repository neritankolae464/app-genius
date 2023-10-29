/** 
 * filename: sophisticated_code.js
 * content: A complex JavaScript code snippet that generates a Fibonacci sequence
 * This code generates a Fibonacci sequence up to a given term, and also implements some higher-level mathematical calculations related to Fibonacci numbers.
 * The code is written in a modular and maintainable way using functions and constants.
 */

// Function to generate Fibonacci sequence up to the nth term
function generateFibonacciSeq(n) {
    let fibSeq = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSeq[i] = fibSeq[i - 1] + fibSeq[i - 2];
    }
    return fibSeq;
}

// Function to calculate the sum of even-valued Fibonacci numbers up to the nth term
function calculateSumOfEvenFibonacci(n) {
    let sum = 0;
    let fibSeq = generateFibonacciSeq(n);
    for (let i = 0; i < fibSeq.length; i++) {
        if (fibSeq[i] % 2 === 0) {
            sum += fibSeq[i];
        }
    }
    return sum;
}

// Constants for testing
const nthTerm = 100; // Generate Fibonacci sequence up to the 100th term
const sumOfEvenFibonacci = calculateSumOfEvenFibonacci(nthTerm);

// Output results
console.log(`The Fibonacci sequence up to the ${nthTerm}th term is:`, generateFibonacciSeq(nthTerm));
console.log(`The sum of even-valued Fibonacci numbers up to the ${nthTerm}th term is:`, sumOfEvenFibonacci);

// More complex mathematical calculations using Fibonacci numbers
const goldenRatio = (1 + Math.sqrt(5)) / 2; // Calculate the Golden ratio (Phi)
const nthFibonacci = generateFibonacciSeq(nthTerm)[nthTerm - 1]; // Calculate the value of the nth Fibonacci number

console.log(`The Golden ratio (Phi) is approximately:`, goldenRatio);
console.log(`The value of the ${nthTerm}th Fibonacci number is:`, nthFibonacci);

// More sophisticated Fibonacci-related calculations
const nthFibonacciPower2 = Math.pow(nthFibonacci, 2); // Calculate the square of the nth Fibonacci number
const nthFibonacciRoot2 = Math.sqrt(nthFibonacci); // Calculate the square root of the nth Fibonacci number

console.log(`The square of the ${nthTerm}th Fibonacci number is:`, nthFibonacciPower2);
console.log(`The square root of the ${nthTerm}th Fibonacci number is:`, nthFibonacciRoot2);

// Additional complex calculations and manipulations can be added as needed...

// End of code
// Qs1: Check if a Number is a Multiple of 5
const userInput = prompt("Enter a number:");
const number = parseInt(userInput);

if (number % 5 === 0) {
    console.log(`${number} is a multiple of 5.`);
} else {
    console.log(`${number} is not a multiple of 5.`);
}

// Qs2: Assign Grades Based on Scores
const score = parseInt(prompt("Enter the student's score:"));
let grade;

if (score >= 80 && score <= 100) {
    grade = 'A';
} else if (score >= 70 && score < 80) {
    grade = 'B';
} else if (score >= 60 && score < 70) {
    grade = 'C';
} else if (score >= 50 && score < 60) {
    grade = 'D';
} else if (score >= 0 && score < 50) {
    grade = 'F';
} else {
    grade = 'Invalid score';
}

console.log("The student's grade is: " + grade);

// Calculator Challenge
function calculator(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Error: Division by zero.";
            }
            return num1 / num2;
        default:
            return "Error: Invalid operator.";
    }
}

// Example usage of calculator
console.log(calculator(5, 2, '+')); // returns 7
console.log(calculator(5, 2, '-')); // returns 3
console.log(calculator(5, 2, '*')); // returns 10
console.log(calculator(5, 2, '/')); // returns 2.5
console.log(calculator(5, 2, '&')); // returns an error message

// FizzBuzz Challenge
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// Function to perform calculation based on the operator
function calculator(num1, num2, operator) {
    let result;

    // Use switch statement to determine the operation
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            // Handle division by zero
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                console.log("Error: Division by zero");
                return; // Exit function if division by zero
            }
            break;
        default:
            console.log("Invalid operator");
            return; // Exit function for invalid operator
    }

    // Log the result
    console.log("Result:", result);
}

// Example usage
calculator(10, 5, '+'); // Output: Result: 15
calculator(10, 5, '-'); // Output: Result: 5
calculator(10, 5, '*'); // Output: Result: 50
calculator(10, 5, '/'); // Output: Result: 2
calculator(10, 0, '/'); // Output: Error: Division by zero
calculator(10, 5, '%'); // Output: Invalid operator

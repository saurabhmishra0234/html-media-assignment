// Function to print numbers divisible by 3 but not by 2
function printNumbersDivisibleBy3Not2(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        
        // Skip the number if it is not divisible by 3 or is divisible by 2
        if (num % 3 !== 0 || num % 2 === 0) {
            continue;
        }

        // Print the number if it meets the criteria
        console.log(num);
    }
}

// Example usage
const numbersArray = [1, 2, 3, 6, 9, 12, 15, 18, 21, 24, 27];
printNumbersDivisibleBy3Not2(numbersArray);

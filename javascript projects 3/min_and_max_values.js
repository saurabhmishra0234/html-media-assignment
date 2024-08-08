// Function to find the maximum and minimum values in an array
const findMaxMin = (numbers) => {
    if (numbers.length === 0) {
        throw new Error("Array cannot be empty");
    }
    
    // Use spread operator to find max and min values
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);

    // Return an object with max and min properties
    return { max, min };
};

// Example usage
const numbers = [5, 2, 7, 1, 9];
const result = findMaxMin(numbers);

console.log('Original Array:', numbers);
console.log('Max and Min:', result);

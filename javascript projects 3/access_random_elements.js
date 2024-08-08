// Function to extract the first, second, and last elements from an array
const extractElements = (arr) => {
    // Ensure the array has at least 2 elements
    if (arr.length < 2) {
        throw new Error("Array must have at least two elements");
    }
    
    // Destructure the first and second elements
    const [first, second, , , last] = arr;
    
    // Return the extracted elements in an array
    return [first, second, arr[arr.length - 1]];
};

// Example usage
const numbers = [1, 2, 3, 4, 5];
const extracted = extractElements(numbers);

console.log('Original Array:', numbers);
console.log('Extracted Elements:', extracted);

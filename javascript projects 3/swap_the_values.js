// Function to swap values of two variables
const swapValues = (x, y) => {
    // Destructure the array to swap values
    [x, y] = [y, x];
    // Return the swapped values in an array
    return [x, y];
};

// Example usage
const a = 5;
const b = 10;
const [swappedA, swappedB] = swapValues(a, b);

console.log(`Original values: a = ${a}, b = ${b}`);
console.log(`Swapped values: a = ${swappedA}, b = ${swappedB}`);

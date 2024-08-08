// Function to print an inverted right-angled triangle pattern of asterisks
function printInvertedTriangle(i) {
    // Ensure i is a positive integer
    if (i <= 0) {
        console.log("Please enter a positive integer.");
        return;
    }

    // Loop through each row
    for (let row = i; row >= 1; row--) {
        // Print the appropriate number of asterisks for the current row
        let rowOutput = '';
        for (let col = 1; col <= row; col++) {
            rowOutput += '*';
        }
        console.log(rowOutput);
    }
}

// Example usage
const i = 6; // You can change this value to test with different numbers
printInvertedTriangle(i);

// Function to mix two colors
function mixColors(color1, color2) {
    let result;

    // Normalize color inputs to lowercase
    color1 = color1.toLowerCase();
    color2 = color2.toLowerCase();

    // Use switch statement to determine the resulting color
    switch (true) {
        case (color1 === 'red' && color2 === 'blue') || (color1 === 'blue' && color2 === 'red'):
            result = 'purple';
            break;
        case (color1 === 'red' && color2 === 'yellow') || (color1 === 'yellow' && color2 === 'red'):
            result = 'orange';
            break;
        case (color1 === 'blue' && color2 === 'yellow') || (color1 === 'yellow' && color2 === 'blue'):
            result = 'green';
            break;
        default:
            result = 'Invalid color combination';
            break;
    }

    // Print the resulting color
    console.log("Resulting color:", result);
}

// Example usage
mixColors('Red', 'Blue');  // Output: Resulting color: purple
mixColors('yellow', 'Red'); // Output: Resulting color: orange
mixColors('blue', 'yellow'); // Output: Resulting color: green
mixColors('purple', 'green'); // Output: Resulting color: Invalid color combination

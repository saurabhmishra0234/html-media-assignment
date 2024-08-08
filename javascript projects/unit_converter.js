// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    // Convert Celsius to Fahrenheit using the formula
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

// Example usage
const celsiusTemperature = 25; // Example temperature in Celsius
const fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
console.log(`Temperature in Fahrenheit: ${fahrenheitTemperature}`);
// Output: Temperature in Fahrenheit: 77

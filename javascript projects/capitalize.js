// Function to capitalize the first letter of a name
function capitalizeFirstLetter(name) {
    // Check if the first letter is lowercase and capitalize it if needed
    return (name && name[0] === name[0].toLowerCase())
        ? name[0].toUpperCase() + name.slice(1)
        : name;
}

// Example usage
const userName1 = "john";
const userName2 = "Alice";

console.log(capitalizeFirstLetter(userName1)); // Output: John
console.log(capitalizeFirstLetter(userName2)); // Output: Alice

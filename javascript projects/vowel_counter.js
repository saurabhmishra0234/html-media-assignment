// Function to count the number of vowels in a name
function countVowels(name) {
    // Define a set of vowels
    const vowels = 'aeiouAEIOU';

    // Initialize a counter for vowels
    let vowelCount = 0;

    // Iterate through each character in the name
    for (let char of name) {
        // Check if the character is a vowel
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }

    // Return the total count of vowels
    return vowelCount;
}

// Example usage
const userName = "Jonathan";
console.log("Number of vowels:", countVowels(userName)); // Output: Number of vowels: 3

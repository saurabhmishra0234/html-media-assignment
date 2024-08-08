// Function to find the highest marks
function findHighestMarks(marks) {
    // Ensure that the array has exactly 5 students
    if (marks.length !== 5) {
        console.log("Error: The array must contain exactly 5 marks.");
        return;
    }

    // Initialize the highest marks with the first element
    let highestMarks = marks[0];

    // Iterate through the array to find the highest marks using the ternary operator
    for (let i = 1; i < marks.length; i++) {
        highestMarks = (marks[i] > highestMarks) ? marks[i] : highestMarks;
    }

    // Display the highest marks
    console.log("The highest marks scored by any student are:", highestMarks);
}

// Example usage
const marks = [78, 85, 92, 88, 76];
findHighestMarks(marks); // Output: The highest marks scored by any student are: 92

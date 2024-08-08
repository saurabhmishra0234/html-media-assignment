// Function to extract name and street from a person object
const extractNameAndStreet = (person) => {
    // Destructure name and street from the nested address object
    const { name, address: { street } } = person;

    // Return an object with the extracted values
    return { name, street };
};

// Example usage
const person = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Elm Street",
        city: "Springfield",
        zip: "12345"
    }
};

const result = extractNameAndStreet(person);

console.log('Extracted Values:', result);

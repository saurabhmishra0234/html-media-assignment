// Function to calculate the total bill and bill per person
function calculateBill(dishes, numberOfPeople) {
    // Check if the number of people is valid
    if (numberOfPeople <= 0) {
        throw new Error('Number of people must be greater than zero.');
    }
    
    // Calculate the total bill
    const totalBill = dishes.reduce((sum, cost) => sum + cost, 0);
    
    // Calculate the bill per person
    const billPerPerson = totalBill / numberOfPeople;
    
    // Return the result as an object
    return {
        totalBill: totalBill,
        billPerPerson: billPerPerson
    };
}

// Example usage
try {
    const dishes = [200, 150, 300, 100]; // Example costs of each dish
    const numberOfPeople = 4; // Example number of people sharing the bill
    
    const result = calculateBill(dishes, numberOfPeople);
    console.log(`Total Bill: Rs. ${result.totalBill}`);
    console.log(`Bill Per Person: Rs. ${result.billPerPerson}`);
    // Output: Total Bill: Rs. 750
    // Output: Bill Per Person: Rs. 187.5
} catch (error) {
    console.error(error.message);
}

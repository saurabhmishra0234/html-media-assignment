// Function to calculate the rental cost
function calculateRentalCost(daysRented, carType) {
    // Define rental rates for different car types
    const rentalRates = {
        'Economy': 4000,   // Rs. 4000 per day
        'Midsize': 10000,  // Rs. 10000 per day
        'Luxury': 20000    // Rs. 20000 per day
    };

    // Check if the car type is valid
    if (!rentalRates[carType]) {
        throw new Error('Invalid car type. Please choose "Economy", "Midsize", or "Luxury".');
    }

    // Calculate the total cost
    const dailyRate = rentalRates[carType];
    const totalCost = daysRented * dailyRate;

    return totalCost;
}

// Example usage
try {
    const days = 5;         // Example number of days rented
    const carType = 'Luxury'; // Example car type

    const cost = calculateRentalCost(days, carType);
    console.log(`The total rental cost for ${days} days in a ${carType} car is Rs. ${cost}`);
    // Output: The total rental cost for 5 days in a Luxury car is Rs. 100000
} catch (error) {
    console.error(error.message);
}

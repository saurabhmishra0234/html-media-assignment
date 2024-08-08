// Arrow function to calculate the percentage of discount
const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    // Check if original price is valid
    if (originalPrice <= 0) {
        throw new Error('Original price must be greater than zero.');
    }

    // Calculate the discount percentage
    const discount = ((originalPrice - discountedPrice) / originalPrice) * 100;
    
    // Round the discount percentage to two decimal places
    return Math.round(discount * 100) / 100;
};

// Example usage
try {
    const originalPrice = 500;       // Example original price
    const discountedPrice = 350;     // Example discounted price

    const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
    console.log(`Discount Percentage: ${discountPercentage}%`);
    // Output: Discount Percentage: 30.00%
} catch (error) {
    console.error(error.message);
}

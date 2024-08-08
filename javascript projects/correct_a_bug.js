// Function to double the quantity of each item in the cart
function correctQuantities(cart) {
    // Map over each item in the cart array and double its quantity
    return cart.map(quantity => quantity * 2);
}

// Example usage
const cartItems = [1, 2, 3, 4, 5]; // Example quantities in the cart
const correctedCart = correctQuantities(cartItems);
console.log("Corrected cart quantities:", correctedCart);
// Output: Corrected cart quantities: [2, 4, 6, 8, 10]

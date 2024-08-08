// Arrow function to calculate the total cost of items in the cart
const calculateTotalCost = (cart) => {
    // Sum up the total cost using reduce
    return cart.reduce((total, item) => total + (item.unitPrice * item.quantity), 0);
};

// Example usage
const cart = [
    { unitPrice: 100, quantity: 2 },  // Item 1: Rs. 100 each, quantity 2
    { unitPrice: 200, quantity: 1 },  // Item 2: Rs. 200 each, quantity 1
    { unitPrice: 50, quantity: 5 }    // Item 3: Rs. 50 each, quantity 5
];

const totalCost = calculateTotalCost(cart);
console.log(`Total Cost: Rs. ${totalCost}`);
// Output: Total Cost: Rs. 650

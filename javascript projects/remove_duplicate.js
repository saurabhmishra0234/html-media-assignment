// Function to remove duplicate items from the cart
function removeDuplicates(cart) {
    // Use a Set to store unique items
    const uniqueItems = new Set(cart);
    
    // Convert the Set back to an array
    return Array.from(uniqueItems);
}

// Example usage
const cartItems = [
    'Apple', 'Banana', 'Apple', 'Orange', 'Banana', 'Grapes', 'Apple'
];

const updatedCart = removeDuplicates(cartItems);
console.log("Cart with duplicates removed:", updatedCart);
// Output: Cart with duplicates removed: [ 'Apple', 'Banana', 'Orange', 'Grapes' ]

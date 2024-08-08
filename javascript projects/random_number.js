// Self-invoking arrow function to generate a random number between 1 and 100
(() => {
    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    
    // Log the random number to the console
    console.log(`Random Number: ${randomNumber}`);
})();

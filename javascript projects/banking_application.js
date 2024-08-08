// Define a customer account object
const customerAccount = {
    name: 'John Doe',
    balance: 1000, // Initial balance
};

// Method to deposit money into the account
customerAccount.deposit = function(amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`${this.name} deposited Rs. ${amount}. New balance: Rs. ${this.balance}`);
    } else {
        console.log('Deposit amount must be greater than zero.');
    }
};

// Method to withdraw money from the account
customerAccount.withdraw = function(amount) {
    if (amount > 0) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`${this.name} withdrew Rs. ${amount}. New balance: Rs. ${this.balance}`);
        } else {
            console.log('Insufficient funds for this withdrawal.');
        }
    } else {
        console.log('Withdrawal amount must be greater than zero.');
    }
};

// Example usage
customerAccount.deposit(500);   // Deposit Rs. 500
customerAccount.withdraw(200);  // Withdraw Rs. 200
customerAccount.withdraw(1500); // Attempt to withdraw more than the balance

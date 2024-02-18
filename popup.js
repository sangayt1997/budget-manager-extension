// Define variables for total budget and spending limit
let totalBudget = 0;
let spendingLimit = 1000; // Set a default limit, you can change this value as needed

// Function to update the total budget display
function updateTotalBudget() {
    document.getElementById('total').textContent = totalBudget;
}

// Function to update the spending limit display
function updateSpendingLimit() {
    document.getElementById('limit').textContent = spendingLimit;
}

// Function to handle spending amount
function spendAmountHandler() {
    // Get the amount entered by the user
    let amount = parseFloat(document.getElementById('amount').value);

    // Check if the amount is valid
    if (!isNaN(amount)) {
        // Check if spending exceeds the limit
        if (totalBudget + amount > spendingLimit) {
            alert("Exceeded spending limit!");
        } else {
            // Update the total budget
            totalBudget += amount;
            updateTotalBudget();
        }
    } else {
        alert("Please enter a valid amount!");
    }
}

// Initialize the display
function initialize() {
    updateTotalBudget();
    updateSpendingLimit();

    // Add event listener for the spendAmount button
    document.getElementById('spendAmount').addEventListener('click', spendAmountHandler);
}

// Add event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', initialize);

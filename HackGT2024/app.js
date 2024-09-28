//variables to store category information

// JavaScript to handle button clicks and update the balance
 let balance = parseFloat(localStorage.getItem('balance')) || 0.00;

 // Set the initial balance to display as $0.00
 document.addEventListener("DOMContentLoaded", function() {
     document.getElementById("value").innerText = `$${balance.toFixed(2)}`;
 });

 // Function to update the balance based on user input
 function updateBalance(inputId, isAdding) {
     // Get the value from the specified input box
     const userInput = parseFloat(document.getElementById(inputId).value);
     
     // Check if userInput is a valid number
     if (!isNaN(userInput) && userInput !== null && userInput !== undefined) {
         // Update the balance based on whether we are adding or subtracting
         balance += isAdding ? userInput : -userInput;
         document.getElementById("value").innerText = `$${balance.toFixed(2)}`; // Update the displayed balance
         localStorage.setItem('balance', balance);
         // Clear the input box after updating
         document.getElementById(inputId).value = '';
     } else {
         alert("Please enter a valid number");
     }
 }

 // Event listeners for the add and subtract buttons
 document.getElementById("addButton").addEventListener("click", function () {
     updateBalance("userInput1", true); // Add value from first input
 });

 document.getElementById("subtractButton").addEventListener("click", function () {
     updateBalance("userInput2", false); // Subtract value from second input
 });

//categories
let categories = {
    rentAndUtilities: 0.00,
    food: 0.00,
    transportation: 0.00,
    savings: 0.00,
    miscellaneous: 0.00
}

//hardcoding for testing
savingsGoal = 100;
savingsActual = 15;

// Function to update the selected category
function updateCategory() {

    // Get the selected category and the entered value
    const selectedCategory = document.getElementById("categorySelect").value;
    const userInput = parseFloat(document.getElementById("updateValue").value);

    // Check if the input value is a valid number
    if (!isNaN(userInput)) {
        // Update the selected category's variable
        categories[selectedCategory] += userInput;

        // Update the display for the selected category
        document.getElementById(`${selectedCategory}Display`).innerText = newValue.toFixed(2);

        // Clear the input field
        document.getElementById("updateValue").value = '';
    
    } else {
        alert("Please enter a valid number.");
    }
}

//avatar update functionality
const duckAvatar = document.getElementById("DuckAvatar");

if (savingsActual / savingsGoal > .75) {
    duckAvatar.src = 'images/veryHappyDuck.svg';
} else if (savingsActual / savingsGoal > .5) {
    duckAvatar.src = 'images/happyDuck.svg';
} else if (savingsActual / savingsGoal > .3) {
    duckAvatar.src = 'images/concernedDuck.svg';
} else {
    duckAvatar.src = 'images/sadDuck.svg';
}
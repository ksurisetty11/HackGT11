//variables to store category information

// JavaScript to handle button clicks and update the balance
 let balance = parseFloat(localStorage.getItem('balance')) || 0.00;

 //categories
let rentAndUtilities = parseFloat(localStorage.getItem('rentAndUtilities')) || 0.00;
let food = parseFloat(localStorage.getItem('rentAndUtilities')) || 0.00;
let transportation = parseFloat(localStorage.getItem('rentAndUtilities')) || 0.00;
let savings = parseFloat(localStorage.getItem('rentAndUtilities')) || 0.00;
let miscellaneous = parseFloat(localStorage.getItem('rentAndUtilities')) || 0.00;


 // Set the initial balance to display as $0.00
 document.addEventListener("DOMContentLoaded", function() {
     document.getElementById("value").innerText = `$${balance.toFixed(2)}`;
});

document.addEventListener("DOMContentLoaded", updateDisplay);

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

//hardcoding for testing
savingsGoal = 100;
savingsActual = 15;

        // Function to update the displayed values
function updateDisplay() {
    document.getElementById("rentAndUtilitiesDisplay").innerText = categories.rentAndUtilities;
    document.getElementById("foodDisplay").innerText = categories.food;
    document.getElementById("transportationDisplay").innerText = categories.transportation;
    document.getElementById("miscellaneousDisplay").innerText = categories.miscellaneous;
}

document.getElementById("submitButton").addEventListener("click", function() {
    // Get the selected category and the value to update
    updateCategoryValue(document.getElementById("categorySelect").value, document.getElementById("updateValue").value);
    updateDisplay();
});

function updateCategoryValue(category, value) {
    // Check if userInput is a valid number

    if (!isNaN(value)) {
        // Update the balance based on whether we are adding or subtracting
        if (category == rentAndUtilities) {
            document.getElementById("rentAndUtilitiesDisplay").innerText = `$${balance.toFixed(2)}`; // Update the displayed balance
            rentAndUtilities += value;
            localStorage.setItem('rentAndUtilities', rentAndUtilities);
        } else if (category == food) {
            document.getElementById("foodDisplay").innerText = `$${balance.toFixed(2)}`; // Update the displayed balance
            food += value;
            localStorage.setItem('food', food);
        } else if (category == transportation) {
            document.getElementById("transportationDisplay").innerText = `$${balance.toFixed(2)}`; // Update the displayed balance
            transportation += value;
            localStorage.setItem('transportation', balance);
        } else if (category == miscellaneous) {
            document.getElementById("miscellaneousDisplay").innerText = `$${balance.toFixed(2)}`; // Update the displayed balance
            miscellaneous += value;
            localStorage.setItem('miscellaneous', miscellaneous);
        }
        // Clear the input box after updating
        document.getElementById("updateValue").value = '';
    } else {
        alert("Please enter a valid number");
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
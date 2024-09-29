//variables to store category information

// JavaScript to handle button clicks and update the balance
let balance = parseFloat(localStorage.getItem('balance')) || 0.00;

 //categories
let rentAndUtilities = parseFloat(localStorage.getItem('rentAndUtilities')) || 0.00;
let food = parseFloat(localStorage.getItem('food')) || 0.00;
let transportation = parseFloat(localStorage.getItem('transportation')) || 0.00;
let savingsGoal = parseFloat(localStorage.getItem('savingsGoal')) || 0.00;
let miscellaneous = parseFloat(localStorage.getItem('miscellaneous')) || 0.00;
let savings = parseFloat(localStorage.getItem('savings')) || 0.00;


 // Set the initial balance to display as $0.00
 document.addEventListener("DOMContentLoaded", function() {
     document.getElementById("value").innerText = `$${balance.toFixed(2)}`;
     updateDisplay();
     goal = parseFloat(localStorage.getItem('savingsGoal'));
     updateDuck(goal);
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

        // Function to update the displayed values
// function updateDisplay() {
//         document.getElementById("rentAndUtilitiesDisplay").innerText = `$${rentAndUtilities.toFixed(2)}`;
//         document.getElementById("foodDisplay").innerText = `$${food.toFixed(2)}`;
//         document.getElementById("transportationDisplay").innerText = `$${transportation.toFixed(2)}`;
//         document.getElementById("miscellaneousDisplay").innerText = `$${miscellaneous.toFixed(2)}`;
//         document.getElementById("savingsDisplay").innerText = `$${savings.toFixed(2)}`;
// }

document.getElementById("submitButton").addEventListener("click", function() {
    // Get the selected category and the value to update
    updateCategoryValue(document.getElementById("categorySelect").value, document.getElementById("updateValue").value);
    updateDuck();
});

function updateCategoryValue(category, value) {

    if (!isNaN(parseFloat(value))) {
        value = parseFloat(value);
        if (category == "rentAndUtilities") {
            rentAndUtilities += value;
            localStorage.setItem('rentAndUtilities', rentAndUtilities);
        } else if (category == "food") {
            food += value;
            localStorage.setItem('food', food);
        } else if (category == "transportation") {
            transportation += value;
            localStorage.setItem('transportation', transportation);
        } else if (category == "miscellaneous") {
            miscellaneous += value;
            localStorage.setItem('miscellaneous', miscellaneous);
        } else if (category == "savings") {
            savings += value;
            localStorage.setItem('savings', savings);
        }
        document.getElementById("updateValue").value = '';
        updateDisplay();
        const goal = parseFloat(localStorage.getItem('savingsGoal'));
        updateDuck(goal);
    } else {
        alert("Please enter a valid number");
    }
}

function updateDuck(goal) {

    const duckAvatar = document.getElementById("DuckAvatar");
    
    // Retrieve and parse the latest savings and savingsGoal from localStorage
    const currentSavings = parseFloat(localStorage.getItem('savings')) || 0.00;
    let currentSavingsGoal = goal;

    // Prevent division by zero by setting a default savingsGoal if it's zero
    if (currentSavingsGoal === 0) {
        duckAvatar.src = 'images/sadDuck.svg'; // Default to sad duck if no savings goal is set
        return;
    }

    // Calculate the savings ratio
    const ratio = currentSavings / currentSavingsGoal;


    // Update the duck avatar based on the ratio
    if (ratio > 0.75) {
        duckAvatar.src = 'images/veryHappyDuck.svg';
    } else if (ratio > 0.5) {
        duckAvatar.src = 'images/happyDuck.svg';
    } else if (ratio > 0.3) {
        duckAvatar.src = 'images/concernedDuck.svg';
    } else {
        duckAvatar.src = 'images/sadDuck.svg';
    }
}
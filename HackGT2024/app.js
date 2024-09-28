//variables to store category information

//categories
rentAndUtilities = 0;
food = 0;
transportation = 0;
savings = 0;
miscellaneous = 0;

//goals info
//hardcoding for testing
savingsGoal = 100;
savingsActual = 15;

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
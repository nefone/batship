var location1 = Math.floor(Math.random()*5);
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var guesses = 0;
var hints = 0;
var isSunk = false;

while (isSunk == false) {
    guess = prompt("Ready file (input number 0-6:)");
    if (guess < 0 || guess > 6) {
        alert ("Please enter valid number!");
    } else {
        guesses = guesses + 1;
    }
    if (guess == location1 || guess == location2 || guess == location3){
        hints = hints + 1;
        alert("Yes!");
    } else {
        alert("No!");
    }
    if (hints == 3) {
        isSunk=true;
        alert("Victory!!!");
    }
}





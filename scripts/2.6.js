// Make a program that ask the user to enter a number between 1 and 7. 
// Depending on the number, display the day of the week that correspond.
//  (1 => Monday, 2 => Tuesday, etc...)

let day = parseInt(prompt("Pick a number between 1 and 7"));

if (day == 1) {

    alert("Monday");

} else if ( day == 2) {

    alert("Tuesday");
}
  else if ( day == 3) {

    alert("Wednesday");
}
else if ( day == 4) {

    alert("Thursday");
}
else if ( day == 5) {

    alert("Friday");
}
else if ( day == 6) {

    alert("Saturday");
}
else if ( day == 7) {

    alert("Sunday");
} else {
    alert("Entre 1 et 7, c'est pas si compliqué quand même");
}
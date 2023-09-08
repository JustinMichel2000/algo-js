// Ask the user to enter three numbers: min, max and current. 
// Display if current is between min and max.

// Bonus: if min is greater than max, 
// display an error message to explain the user he's doesn't understand anything 
// then exit the program. (It must not ask any other question.)

// Bonus 2: be polite in the error messages. (facultative)




let min = prompt("Enter a minimum number:");
let max = parseInt(prompt("Enter a maximum number:"));
let current = prompt("Enter a current number:");


if (min > max) {

    alert("You dont understand anything ,politely!");
}

else { ((min < current) && (max > current))

    alert(current);

} 



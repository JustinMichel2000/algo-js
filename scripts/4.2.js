
function rand10()
//   rand10() is the function which displays 
// a random integer number between 1 and 10 each time we run it
{
    let randomDecimal= Math.random();

   // Math.random() gives a decimal by default between 0 and 1
    
    let randomInteger = Math.floor(randomDecimal * 10) + 1;

    //  Math.floor gives a integer number unlike Math.random 
    // and put it between 1 and 10
    
    return randomInteger;
     
  }
  
  let randomNumber = rand10();
  console.log(`Random number between 1 and 10: ${randomNumber}`);

//   Generate a random number between 1 and 10 
// and displays it in the console every time we run it
  









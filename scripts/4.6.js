function factorial(a) {
    if (a == 0) {
      return 1;
    } else {
      return a * factorial(a - 1);
    }
  }
  
  
  let message = prompt
  ("Enter a number to know its factorial : ");
  let number = parseInt(message);

  
  if (!isNaN(number) && number >= 0) {
    let result = factorial(number);
    alert(`The factorial of ${number} is ${result}`);

  } else {
    alert
    (" Enter an integer positive number. ");
  }
  

function calcSurface(length, width) {
    return length * width;
  }
  
  
  function UserAnswers(promptMessage) {
    let answer = prompt(promptMessage);
    return (answer); 
  }
  

console.log("What is the surface of the rectangle? ");

  let userLength = UserAnswers("What is the length of the rectangle:");
  let userWidth = UserAnswers("What is the width of the rectangle:");
  
  if ((userLength) && (userWidth) > 0) {
    let surface = calcSurface(userLength, userWidth);
    console.log("The surface of the rectangle is : " + surface);
  }

  
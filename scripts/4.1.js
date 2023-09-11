
function calcSurface(length, width) {
    return length * width;
  }
  
  
  function UserAnswers(promptMessage) {
    let answer = prompt(promptMessage);
    return (answer); 
  }
  

console.log("What is the surface of the rectangle? ");

  const userLength = UserAnswers("What is the length of the rectangle:");
  const userWidth = UserAnswers("What is the width of the rectangle:");
  
  if ((userLength) && (userWidth) > 0) {
    const surface = calcSurface(userLength, userWidth);
    console.log(`The surface of the rectangle is : ${surface}`);
  }

  
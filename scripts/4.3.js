
function rand10() {
    let randomDecimal = Math.random();
    let randomInteger = Math.floor(randomDecimal * 10) + 1;
    return randomInteger;
  }


  
  function multiRand(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(rand10());
    }
    return arr;
  }


  
  function generate() {
    let numberOfRandomNumbers = 
    parseInt(prompt("Enter a number of random numbers to generate:"));
  
    if (isNaN(numberOfRandomNumbers) || numberOfRandomNumbers <= 0) {
      console.log("Enter a number between 1 and 10.");
    } else {
      let randomNumbers = multiRand(numberOfRandomNumbers);
      alert("Random numbers are : " + randomNumbers);
    }
  }
  
  generate();
  
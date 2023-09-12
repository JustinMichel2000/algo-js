
function pickLearner(inputAr, n) {

    if (n <= 0 || n > inputAr.length) {
      return "Enter a number between 1 and 26";
    }

    let shuffledArray = inputAr.slice();
  
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
  
    return shuffledArray.slice(0, n);
}
  
  let learners = [
    "Alexandre", "Antoine", "Bastien", "Carole", "Dorian", "Elisabeth",
    "Elodie", "Justin", "Justine", "Justine", "Kimi", "Layla", "Lidwine",
    "Lucas", "Marie", "Mathias", "Okly", "Pierre", "Robin",
    "Rosalie", "Stephane", "Tim", "Tom", "Valentin", "Alexandre", "Virginie"
  ];
  
  let n = parseInt(prompt
    ("Enter the number of learners to select:"));
  
  if (isNaN(n) || n <= 0 || n > learners.length) {
    parseInt(prompt("Enter a number between 1 and " 
    + learners.length));
    
  } else {
    let selectedLearners = pickLearner(learners, n);
    console.log("Selected Learners:", selectedLearners);
  }
  
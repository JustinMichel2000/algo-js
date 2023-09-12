// Create a function pickLearner(inputAr, n) 
// that takes 2 parameters.

// inputAr : An array of learners 
// (the one you created in exercise 3.0 for example)
// n : A number, that should be greater than 0 
// and less than the length of inputAr
// The function should return an 
// array of randomly selected learners.

function pickLearner(inputAr, n) {

    for (let i = 0; i < n; i++) {
        let random = inputAr[Math.floor(Math.random() * inputAr.length)];
        return random
    }
}
    let inputAr = 
    ["Alexandre", "Antoine", "Bastien", "Carole", "Dorian" , "Elisabeth", 
    "Elodie", "Justin" , "Justine", "Justine", "Kimi", "Layla", "Lidwine", "Lucas", 
    "Marie", "Mathias", "Okly", "Pierre", "Robin", 
    "Rosalie", "Stephane", "Tim", "Tom", "Valentin", 
    "Alexandre", "Virginie"];
    

    console.log(pickLearner(inputAr));

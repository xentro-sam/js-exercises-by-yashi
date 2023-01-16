// using normal function
function changeCapitalization(input) {
  let size = input.length;
  let output = '';

  for(let i = 0; i < size; i++) {
    let alphabet = input[i];
    if(alphabet.toUpperCase() === alphabet) {
      alphabet = alphabet.toLowerCase();
    }
    else if(alphabet.toLowerCase() === alphabet) {
      alphabet = alphabet.toUpperCase();
    }
    output = output + alphabet;
  }

  return output;
}

// using arrow function
const changeCapitalizationArrow = (input) => {
  let size = input.length;
  let output = '';

  for(let i = 0; i < size; i++) {
    let alphabet = input[i];
    if(alphabet.toUpperCase() === alphabet) {
      output = output + alphabet.toLowerCase();
    }
    else if(alphabet.toLowerCase() === alphabet) {
      output = output + alphabet.toUpperCase();
    }
  }

  return output;
};

module.exports = {changeCapitalization, changeCapitalizationArrow};
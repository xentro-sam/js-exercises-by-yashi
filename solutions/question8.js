// using normal function
function countVowels(input) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let size = input.length;
  let count = 0;

  for(let i = 0; i < size; i++) {
    if(vowels.includes(input[i])) {
      count++;
    }
  }

  return count;
}

// using arrow function
const countVowelsArrow = (input) => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let size = input.length;
  let count = 0;

  for(let i = 0; i < size; i++) {
    if(vowels.includes(input[i])) {
      count++;
    }
  }

  return count;
};

module.exports = {countVowels, countVowelsArrow};
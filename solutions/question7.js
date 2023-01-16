// using normal function
function joinExceptFirst(input) {
  let result = input[0].substring(1) + input[1].substring(1);
  return result;
}

// using arrow function
const joinExceptFirstArrow = (input) => {
  let result = input[0].substring(1) + input[1].substring(1);
  return result;
};

module.exports = {joinExceptFirst, joinExceptFirstArrow};
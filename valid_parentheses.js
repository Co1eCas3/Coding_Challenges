// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

function validParentheses(parens) {
  if (!parens.length) return true;
  if (parens.startsWith(")") || parens.endsWith("(")) return false;

  const x = parens.match(/[({\[]/g),
    y = parens.match(/[)}\]]/g);

  return x === null || y === null ? false : x.length === y.length;
}

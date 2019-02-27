// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number) {
  if (number && number > 0) {
    let fizzbuzz = [],
      i = 3;
    while (i < number) {
      if (i % 3 === 0 && i % 5 === 0) {
        fizzbuzz.push(i);
      } else if (i % 3 === 0 || i % 5 === 0) {
        fizzbuzz.push(i);
      }
      i++;
    }
    return fizzbuzz.reduce((a, b) => a + b, 0);
  } else {
    return 0;
  }
}

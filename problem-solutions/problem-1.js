// Project Euler Problem 1 https://projecteuler.net/problem=1
//
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

function multiples(num) {
  let multiplesArr = [];
  for (let i = 1; i <= num; i++) {
    // Used for loop because they are fun to write
    if (i % 3 === 0) {
      multiplesArr.push(i);
    } else if (i % 5 === 0) {
      multiplesArr.push(i);
    }
  }
  return multiplesArr.reduce((total, accum) => {
    // Used .reduce() for succinct code
    return (total += accum);
  }, 0);
}
console.log(multiples(100)); // Will get result for any number

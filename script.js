const prices = [1, 2, 3, 4, 5, 6, 7, 8];

const evenNumbers = prices.filter((num) => {
  return num % 2 === 0;
});

const tripledEvens = evenNumbers.map((evenNumbers) => {
  return evenNumbers * 3;
});

const sumOfTripledEvens = tripledEvens.reduce((total, current) => {
  return total + current;
}, 0);
console.log(evenNumbers);
console.log(tripledEvens);
console.log(sumOfTripledEvens);

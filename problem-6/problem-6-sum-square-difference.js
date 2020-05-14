function getSumOfSquares(n) {
  let total = 0;

  for (let i = 1; i <= n; i += 1) {
    total = total + Math.pow(i, 2);
  }

  return total;
}

function getSquareOfSum(n) {
  let total = 0;

  for (let i = 1; i <= n; i += 1) {
    total = total + i;
  }

  return Math.pow(total, 2);
}

function sumSquareDifference(n) {
  let sumOfSquares = getSumOfSquares(n);
  let squareOfSum = getSquareOfSum(n);

  return squareOfSum - sumOfSquares;
}

sumSquareDifference(100);

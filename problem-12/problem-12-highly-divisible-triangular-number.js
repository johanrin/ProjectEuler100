function countDivisors(n) {
  let counter = 0;

  for (let i = 1; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      if (n / i === i) {
        counter += 1;
      } else {
        counter += 2;
      }
    }
  }

  return counter;
}

function divisibleTriangleNumber(n) {
  let sum = 0;

  for (let i = 1; countDivisors(sum) < n; i += 1) {
    console.log(sum);
    sum += i;
  }

  return sum;
}

divisibleTriangleNumber(100);

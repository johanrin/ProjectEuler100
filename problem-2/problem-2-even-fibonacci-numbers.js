function fiboEvenSum(n) {
  let i = 1;
  let j = 2;
  let sum = 0;
  let evenSum = 2;

  do {
    sum = i + j;

    if (sum % 2 === 0) {
      evenSum = evenSum + sum;
    }

    i = j;
    j = sum;
  } while (sum < n);

  return evenSum;
}

fiboEvenSum(10);

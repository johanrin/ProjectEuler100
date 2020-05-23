function checkCollatzSequence(start) {
  let n = start;
  let count = 1;

  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
    count += 1;
  }

  return count;
}

function longestCollatzSequence(limit) {
  let startingNumber = 1;
  let longestChain = 1;
  let chain;

  for (let i = 1; i <= limit; i += 1) {
    chain = checkCollatzSequence(i);

    if (chain > longestChain) {
      longestChain = chain;
      startingNumber = i;
    }
  }

  return startingNumber;
}

longestCollatzSequence(14);

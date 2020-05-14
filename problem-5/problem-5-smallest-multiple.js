function smallestMult(n) {
  let smallestNumber = n;
  let i = 1;

  while (i <= n) {
    if (smallestNumber % i === 0) {
      i += 1;
    } else {
      i = 1;
      smallestNumber += 1;
    }
  }

  return smallestNumber;
}

smallestMult(5);

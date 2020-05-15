function isPrime(n) {
  if (n === 1) {
    return false;
  }

  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function nthPrime(n) {
  let counterPrime = 0;
  let counter = 1;
  let prime = 0;

  while (counterPrime < n) {
    while (!isPrime(counter)) {
      counter += 1;
    }
    prime = counter;
    counterPrime += 1;

    counter += 1;
  }

  return prime;
}

nthPrime(6);

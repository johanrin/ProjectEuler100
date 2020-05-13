function largestPrimeFactor(number) {
  let dividend = number;
  let divisor = 2;
  let quotient = dividend / divisor;

  while (divisor < dividend) {
    while (Number.isInteger(quotient) && quotient > 1) {
      dividend = quotient;
      quotient = dividend / divisor;
    }

    if (!Number.isInteger(quotient)) {
      divisor += 1;
      quotient = dividend / divisor;
    }

    if (quotient === 1) {
      return divisor;
    }
  }

  return divisor;
}

largestPrimeFactor(13195);

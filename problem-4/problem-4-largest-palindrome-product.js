function isPalindrome(s) {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (s[start] === s[end]) {
      start += 1;
      end -= 1;
    } else {
      return false;
    }
  }

  return true;
}

function getMinDigit(n) {
  let digit = "9";

  for (let i = 1; i < n; i += 1) {
    digit = digit.concat("0");
  }

  return parseInt(digit, 10);
}

function getMaxDigit(n) {
  let digit = "9";

  for (let i = 1; i < n; i += 1) {
    digit = digit.concat("9");
  }

  return parseInt(digit, 10);
}

function largestPalindromeProduct(n) {
  let max = getMaxDigit(n);
  let min = getMinDigit(n);
  let i = getMaxDigit(n);
  let j = getMaxDigit(n);
  let product;

  if (n === 1) {
    return 1;
  }

  while (j > min) {
    while (i > min) {
      product = i * j;

      if (isPalindrome(product.toString())) {
        return product;
      }

      i -= 1;
    }
    i = max;
    j -= 1;
  }
}

largestPalindromeProduct(3);

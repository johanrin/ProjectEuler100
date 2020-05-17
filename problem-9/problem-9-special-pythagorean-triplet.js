function specialPythagoreanTriplet(n) {
  let c;

  for (let a = 1; a < n; a += 1) {
    for (let b = 2; b < n; b += 1) {
      c = n - a - b;

      if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
        return a * b * c;
      }
    }
  }
}

specialPythagoreanTriplet(1000);

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function getLergerInt(number1, number2) {
  return Math.max(number1, number2);
}

function fibonacciSequence(limit = 50) {
  let serie = [1, 1];
  let i = 2;
  for (i; i < limit; i++) {
    serie[i] = serie[i - 1] + serie[i - 2];
  }
  return serie;
}

function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

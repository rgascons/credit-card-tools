export function doubleAndSumDigits(digit: number) {
  let ret = digit * 2;

  if (ret === 10) ret = 1;
  else if (ret === 12) ret = 3;
  else if (ret === 14) ret = 5;
  else if (ret === 16) ret = 7;
  else if (ret === 18) ret = 9;

  return ret;
}

export function validateNumber(cardNumber: string) {
  let sum = 0;
  let odd = false;
  for (let i = cardNumber.length; i > 0; i -= 1) {
    let digit = parseInt(cardNumber.charAt(i - 1), 10);

    if (odd) {
      digit = doubleAndSumDigits(digit);
    }

    odd = !odd;
    sum += digit;
  }

  return sum % 10 === 0;
}

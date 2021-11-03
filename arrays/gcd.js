
function getGreatestCommonDivisor(num1, num2) {
  let a = num1;
  let b = num2;

  while(true) {
    if (a === 0) return b;
    if (b === 0) return a;

    const tempA = a;
    a = b;
    b = tempA % b;
  }
}

console.log()
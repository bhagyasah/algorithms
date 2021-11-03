
function lineThroughPoints(points) {
  let maxNumberOfPointsOnLine = 1;

  for (let idx1 = 0; idx1 < points.length; idx1++) {
    const p1 = points[idx1];
    const slopes = {};

    for (let idx2 =  idx1 + 1; idx2 < points.length; idx2++) {
      const p2 = points[idx2];
      const [rise, run] = getSlopOfLineBetweenPoints(p1, p2);
      const slopeKey = createHashableKeyForRational(rise, run);
      if (!(slopeKey in slopes)) slopes[slopeKey] = 1;
      slopes[slopeKey]++;
    }

    const currentMaxNumberOfPointsOnLine = Object.values(slopes).reduce((a,b) => Math.max(a,b), 0);
    maxNumberOfPointsOnLine = Math.max(maxNumberOfPointsOnLine, currentMaxNumberOfPointsOnLine);
  }

  return maxNumberOfPointsOnLine;
}

function getSlopOfLineBetweenPoints(p1, p2) {
  const [p1x, p1y] = p1;
  const [p2x, p2y] = p2;
  let slope = [1,0];

  if (p1x !== p2x) {
    let xDiff = p1x - p2x;
    let yDiff = p1y - p2y;
    let gcd = getGreatestCommonDivisor(Math.abs(xDiff), Math.abs(yDiff));
    xDiff = Math.floor(xDiff / gcd);
    yDiff = Math.floor(yDiff / gcd);

    if (xDiff < 0) {
      xDiff *= -1;
      yDiff *= -1;
    }

    slope = [yDiff, xDiff];
  }
  return slope;
}


function createHashableKeyForRational(numerator, denominator) {
  return numerator.toString() + ':' + denominator.toString();
}

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


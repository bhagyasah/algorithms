
const test = {
  "points": [
    [1, 5],
    [5, 1],
    [4, 2],
    [2, 4],
    [2, 2],
    [1, 2],
    [4, 5],
    [2, 5],
    [-1, -2]
  ]
}

function minimumAreaRectangle(points) {
  const columns = intitalColumnsValues(points);
  const edges = {}
  let minimumArea = Infinity;
  const sortedColumns = Object.keys(columns).map(col => parseInt(col)).sort((a,b) => a-b);

  for (let x of sortedColumns) {
    const sortedYValue = columns[x].sort((a,b) => a - b);

    for (let nextPoint =0; nextPoint < sortedYValue.length; nextPoint++) {
      let y2 = sortedYValue[nextPoint];

      for (let prevPoint=0; prevPoint < nextPoint; prevPoint++) {
       let y1 = sortedYValue[prevPoint];
        let stringPiont = y1.toString() + ":" + y2.toString();
        if (stringPiont in edges) {
          const currentArea = (x - edges[stringPiont]) * (y2 - y1);
          minimumArea = Math.min(minimumArea, currentArea); 
        }

        edges[stringPiont] = x;
      }
    }
  }
return minimumArea !== Infinity ? minimumArea : 0
}

function intitalColumnsValues(points) {
  let columns = {};

  for (let point of points) {
    const [x,y] = point;
    if (!columns[x]) {
      columns[x] = []
    }
    columns[x].push(y)
  }
  return columns;
}


console.log(minimumAreaRectangle(test.points))
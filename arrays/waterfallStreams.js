const test1 = {
  "array": [
    [0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0]
  ],
  "source": 3
}


function waterfallStreams(array, source) {
  let rowAbove = [...array[0]];
  rowAbove[source] = -1;

  for (let row=1; row < array.length; row++) {
    const currentRow = [...array[row]];

    for (let idx = 0; idx < rowAbove.length; idx++) {
      let valueAbove = rowAbove[idx];
      let hasAboveValue = valueAbove < 0;
      let hasCurrentBlock = currentRow[idx] === 1;

      if (!hasAboveValue) {
        continue;
      }

      if (!hasCurrentBlock) {
        currentRow[idx] += valueAbove;
        continue;
      }

      let splitWater = valueAbove / 2;
      let rightIdx=idx;
      while(rightIdx + 1 < rowAbove.length) {
        rightIdx++;
        if (rowAbove[rightIdx] === 1) {
          break;
        }

        if (currentRow[rightIdx] !== 1) {
          currentRow[rightIdx] += splitWater;
          break;
        }
      }

      let leftIdx=idx;
      while (leftIdx - 1 >= 0) {
        leftIdx--;
        if (rowAbove[leftIdx] === 1) {
          break;
        }

        if (currentRow[leftIdx] !== 1) {
          currentRow[leftIdx] += splitWater;
          break;
        }

      }
    }
    rowAbove = currentRow;
  }

  let finalResult = rowAbove.map(num => (num < 0 ? num * -100 : 0));
  return finalResult;
 }
 
 console.log(waterfallStreams(test1.array, test1.source));
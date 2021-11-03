const test1 = {
  "array": [
    [0, 0, 0, -1, 0, 0, 0],
    [1, 0, 0, -1, 0, 0, 0],
    [0, 0, 1, 1, 1, -0.5, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0]
  ],
  "source": 3
}

function waterfallStreams(array, source) {
  // Write your code here.
  let rowAbove = [...array[0]];
  rowAbove[source] = -1;
  for (let row = 1; row < array.length; row++) {
    const currentRow = [...array[row]];

    for (let idx=0; idx < rowAbove.length; idx++) {
      const valueAbove = rowAbove[idx];
      const hasWaterAbove = valueAbove < 0;
      const hasBlock = currentRow[idx] === 1;
      
      // if block is empty then return the loop back
      if (!hasWaterAbove) {
        continue;
      }
     
      if (!hasBlock) {
        // if there is no block in the current column, move the water down.
        currentRow[idx] += valueAbove;
        continue;
      }

      const splitWater = valueAbove / 2;
      let rightIdx = idx;
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

      let leftIdx = idx;
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
  const finalPercentages = rowAbove.map(num => (num < 0 ? num * -100 : num))
return finalPercentages;
}

waterfallStreams(test1.array, test1.source)
const test1 = [[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]];
const test5 =  [
  [1, 10],
  [10, 20],
  [20, 30],
  [30, 40],
  [40, 50],
  [50, 60],
  [60, 70],
  [70, 80],
  [80, 90],
  [90, 100]
]

const test3 = [
  [100, 105],
  [1, 104]
]

const test4 = [
  [89, 90],
  [-10, 20],
  [-50, 0],
  [70, 90],
  [90, 91],
  [90, 95]
];

const test13 = [
  [2, 3],
  [4, 5],
  [6, 7],
  [8, 9],
  [1, 10]
]

function mergeOverlappingIntervals(array) {
  // Write your code here.
  array.sort((a,b) => a[0] - b[0])
  console.log('array', array);
  let result = [];
  let track = {}
  if (array.length === 1) {
    return array;
  }
  for (let i=0; i<array.length; i++) {
    if (i !== array.length-1) {
      if (array[i][1] >= array[i+1][0]) {
        let lastIndex=i;
        console.log('Array', array[i]);
        for(let j=i; j<array.length - 1; j++) {
          if ((array[i][1] >= array[j+1][0]) || (array[j][1] >= array[j+1][0])) {
            console.log('inside', array[j][1],array[j+1][0] )
            lastIndex += 1;
          }else {
            break;
          }
        }
        console.log(i, lastIndex)
        // i = lastIndex
        const min = Math.min(...array[i], ...array[lastIndex]);
        const max = Math.max(...array[i], ...array[lastIndex]);
        result.push([min, max]);
        i = lastIndex
      } else {
        result.push(array[i])
      }
    } else {
      result.push(array[i])
    }
  }
  return result;
}

console.log(mergeOverlappingIntervals(test1))
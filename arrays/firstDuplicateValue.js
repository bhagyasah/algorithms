const test1 =  [2, 1, 5, 2, 3, 3, 4];
const test2  = [2, 1, 5, 3, 3, 2, 4];
function firstDuplicateValue(array) {
  let result = {};
  for(let i=0; i<array.length; i++) {
    for(let j=0; j<array.length; j++) {
      if ((array[i] === array[j]) && (i !== j) && !result[array[i]]) {
      
        result[array[i]] = j;
      }
    }
  }
  // console.log(result)
  const keys = Object.keys(result);
  const values = Object.values(result);
  const indx = values.indexOf(Math.min(...values));
  const resValue = keys[indx];
  
  if (keys.length ===0) {
    retrun -1;
  }

  return parseInt(resValue);
}

console.log(firstDuplicateValue(test2))
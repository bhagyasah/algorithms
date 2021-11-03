const test =  [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19];
const test2 = [1,2,3];

function subarraySort(array) {
  // Write your code here.
  const orginalArray = array.map(a => a);
  const sortedArray = array.sort((a,b) => a-b);
  let left=0;
  let right = array.length - 1;
  // console.log(sortedArray, orginalArray)
  for (; left<array.length; left++) {
    // console.log(orginalArray[left], sortedArray[left]);
    if (orginalArray[left] !== sortedArray[left]) {
      break;
    }
  }
  console.log(left)
  if (left === array.length ) {
    return [-1,-1]
  }

  for (; right>=0; right--) {
    // console.log(orginalArray[right], sortedArray[right]);
    if (orginalArray[right] !== sortedArray[right]) {
      break;
    }
  }

  return[left, right];

}
console.log(subarraySort(test2));
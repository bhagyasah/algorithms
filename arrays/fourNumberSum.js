const test1  = [7, 6, 4, -1, 1, 2];
const targetSum = 16;

function fourNumberSum(array, targetSum) {
  // Write your code here.
	let result = [];
	let numSet = new Set();
	for (let i=0; i<array.length; i++) {
		for (let j=i; j<array.length; j++) {
				for (let k=j; k<array.length; k++) {
					for (let l=k; l<array.length; l++) {
            numSet.add(i);
            numSet.add(j);
            numSet.add(k);
            numSet.add(l);
            if (numSet.size === 4) {
              tempSum = array[i] + array[j] + array[k] + array[l];
              if (targetSum === tempSum) {
                result.push([array[i], array[j], array[k], array[l]])
              }
            }
            numSet.clear();
					}
			}
		}
	}
  return result;
}

console.log(fourNumberSum(test1, targetSum));

const test1 = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];

const test3 = [1,3,2];

function longestPeak(array) {
  // Write your code here.
	let result=[];
	let peakFound=false;
	for (let i=1; i<array.length - 1; i++) {
		if ((array[i] > array[i-1]) && (array[i] > array[i+1])) {
			console.log('peak found', array[i])
			let count=[array[i]];
			// move to right for ount peak value
      for (let right=i; right<array.length; right++) {
        if (array[right] >  array[right + 1]) {
          count.push(array[right+1])
        } else {
          break;
        }
      }

			// console.log(after)
			for (let left=i; left > 0; left--) {
					if (array[left] >  array[left - 1]) {
						count.push(array[left-1])
					} else {
						break;
					}
				}
        console.log('currentPeak length', count)
			if (result.length < count.length) {
				result = count
			}
		}
}
	return result.length;
}

const result = longestPeak(test1);
console.log('result', result);
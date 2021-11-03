function twoNumberSum(array, targetSum) {
  // Write your code here.
	let result = [];
	array.forEach((e) => {
		array.forEach((f) => {
			if (e !== f && ((e + f) === targetSum)) {
				result = [e,f];
				return;
			}
		})
		if (result.length !== 0) {
			return;
		}
	})
	return result;
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
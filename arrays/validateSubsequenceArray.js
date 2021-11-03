function isValidSubsequence(array, sequence) {
  // Write your code here.
	let i = 0;
	let j= 0;
	for (; i < array.length; i++) {
		if (array[i] === sequence[j]) {
			j++;
		}
		if (j === sequence.length) {
			return true;
		}
	}
	return false;
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
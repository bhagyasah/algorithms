class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


function validateBst(tree) {
  return validateBstHelper(tree, -Infinity, Infinity);
}

function validateBstHelper(tree,  minValue, maxValue) {
  if (tree === null) return true;
  if (tree.value < minValue || tree.value >= maxValue) {
    console.log(tree.value, minValue, maxValue);
    return false;
  } 

  const leftValid = validateBstHelper(tree.left, minValue, tree.value);
  const rightValid = validateBstHelper(tree.right, tree.value, maxValue);
  return leftValid && rightValid;

}
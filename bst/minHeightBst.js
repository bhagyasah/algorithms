// time O(nlog(n)) space O(n)
// function constructMinHeightBst(array, bst, startIndx, endIdx) {
//   if (endIdx < startIndx) return;

//   const midIdx = Math.floor((startIndx + endIdx) / 2);
//   const valueToAdd = array[midIdx];

//   if (bst === null) {
//     bst = new BST(valueToAdd);
//   } else {
//     bst.insert(valueToAdd)
//   }
//   constructMinHeightBst(array, bst, startIndx, midIdx - 1);
//   constructMinHeightBst(array, bst, midIdx + 1, endIdx);
//   return bst;
// }


class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

function minHeightBst(array) {
  return constructMinHeightBst(array, null, 0, array.length - 1);
}
// time O(n) stpace O(n)
function constructMinHeightBst(array, bst, startIdx, endIdx) {
  if (endIdx < startIdx) return;
  const midIdx = Math.floor((startIdx + endIdx) / 2);
  const valueToAdd = array[midIdx];
  const newNodeBst = new BST(valueToAdd);

  if (bst === null) {
    bst = newNodeBst;
  } else {
    if (valueToAdd < bst.value) {
      bst.left = newNodeBst;
      bst = bst.left;
    } else {
      bst.right = newNodeBst;
      bst = bst.right;
    }
  }

  constructMinHeightBst(array, bst, startIdx, midIdx - 1);
  constructMinHeightBst(array, bst, midIdx + 1, endIdx);
  return bst;
}
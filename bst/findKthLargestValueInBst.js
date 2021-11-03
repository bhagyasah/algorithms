// this not more optimal solution Time O(n) Space O(n);
// function findKthLargestValueInBstInOrderTraversal(tree, array) {
//   if (tree !== null) {
//     findKthLargestValueInBstInOrderTraversal(tree.left, array);
//     array.push(tree.value);
//     findKthLargestValueInBstInOrderTraversal(tree.right, array);
//   }
//   return array;
// }

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class TreeInfo {
  constructor(nodeVisitedCount, lastNode) {
    this.nodeVisitedCount = nodeVisitedCount;
    this.lastNode = lastNode;
  }
}

function findKthLargestValueInBst(tree, k) {
  // Write your code here.
  const treeInfo = new TreeInfo(0, null);
  findKthLargestValueInBstReverseInOrderTraversal(tree, k, treeInfo);
  console.log(nodeVisitedCount, lastNode)
  return treeInfo.lastNode;
}

function findKthLargestValueInBstReverseInOrderTraversal(tree, k, treeInfo) {
  
  if (tree !== null) {
    findKthLargestValueInBstReverseInOrderTraversal(tree.right, k, treeInfo);
    if (treeInfo.nodeVisitedCount < k) {
      treeInfo.nodeVisitedCount++;
      treeInfo.lastNode = tree.value;
      findKthLargestValueInBstReverseInOrderTraversal(tree.left, k, treeInfo);
    }
  }
}
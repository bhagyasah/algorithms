// Time O(n^2) space O(n)
// function reconstructBst(preOrderTraversalValues) {
//   if (preOrderTraversalValues.length === 0) return null;

//   const currentValue = preOrderTraversalValues[0];
//   let rightSubtreeRootIdx = preOrderTraversalValues.length;
  
//   for(let idx=1; idx < preOrderTraversalValues.length; idx++) {
//     const value = preOrderTraversalValues[idx];

//     if (value >= currentValue) {
//       rightSubtreeRootIdx = idx;
//       break;
//     }
//   }

//   const leftSubtree = reconstructBst(preOrderTraversalValues.slice(1, rightSubtreeRootIdx));
//   const rightSubtree = reconstructBst(preOrderTraversalValues.slice(rightSubtreeRootIdx));
//   return new BST(currentValue, leftSubtree, rightSubtree);
// }


class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class TreeInfo {
  constructor(rootIdx) {
    this.rootIdx = rootIdx;
  }
}

function reconstructBst(preOrderTraversalValues) {
  const treeInfo = new TreeInfo(0);

  return reconstructBstFromRange(-Infinity, Infinity, preOrderTraversalValues, treeInfo);
}
// O(n) time | O(n) space
function reconstructBstFromRange(lowerBound, upperBound, preOrderTraversalValues, currentSubtreeInfo) {
  if (currentSubtreeInfo.rootIdx === preOrderTraversalValues.length) return null;

  const rootValue = preOrderTraversalValues[currentSubtreeInfo.rootIdx];
  if (rootValue < lowerBound || rootValue >= upperBound) return null;

  currentSubtreeInfo.rootIdx++;
  const leftSubtree = reconstructBstFromRange(lowerBound, rootValue, preOrderTraversalValues, currentSubtreeInfo);
  const rightSubtree = reconstructBstFromRange(rootValue, upperBound, preOrderTraversalValues, currentSubtreeInfo);
  return new BST(rootValue, leftSubtree, rightSubtree);
}
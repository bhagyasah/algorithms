class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    let currentNode = this;
    while(true) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = new BST(value);
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = new BST(value);
          break;
        } else  {
          currentNode = currentNode.right;
        }
      }
    }
    return this;
  }

  contains(value) {
    // Write your code here.
    let currentNode = this;
    while(currentNode !== null) {
      if (value < currentNode.value) {
       currentNode = currentNode.left;
      } else if (value > currentNode.value) {
       currentNode = currentNode.right;
      } else {
        return true;
      }
    }
    return false;
  }

  remove(value, parent = null) {
   let currentNode = this;
   while(currentNode !== null) {
     if (value < currentNode.value) {
       parent = currentNode;
        currentNode = currentNode.left;
     } else if (value > currentNode.value) {
      parent = currentNode;
      currentNode = currentNode.right;
     } else {
       if (currentNode.left !== null && currentNode.right !== null) {
         currentNode.value = currentNode.right.getMinValue();
         currentNode.right.remove(currentNode.value, currentNode);
       } else if (parent === null) {
         if (currentNode.left !== null) {
           currentNode.value = currentNode.left.value;
           currentNode.right = currentNode.left.right;
           currentNode.left = currentNode.left.left;
         } else if (currentNode.right !== null) {
           currentNode.value = currentNode.right.value;
           currentNode.left = currentNode.right.left;
           currentNode.right = currentNode.right.right
         } else {
           // no nothing for single node
         }
       } else if (parent.left === currentNode) {
         parent.left = currentNode.left !== null ? currentNode.left : currentNode.right;
       } else if (parent.right === currentNode) {
         parent.right = currentNode.left !== null ? currentNode.left : currentNode.right;
       }
       break;
     }
   }

    return this;
  }

  getMinValue() {
    let currentNode = this;
    while(currentNode.left !== null) {
     currentNode = currentNode.left;
    }
    return currentNode.value;
  }
}

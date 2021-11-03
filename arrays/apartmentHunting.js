
function reqDistanceFromCurrentBlockLeft(req, currentBlockIdx, blocks, result) {
  for (let i=currentBlockIdx; i < blocks.length; i++) {
    if (blocks[i][req]) {
      result[currentBlockIdx] = i- currentBlockIdx;
      return;
    }
  }
}

function reqDistanceFromCurrentBlockRight(req, currentBlockIdx, blocks, result) {
  for (let i=currentBlockIdx; i >= 0; i--) {
    if (blocks[i][req]) {
        // console.log(result[currentBlockIdx], currentBlockIdx - i)
        if (result[currentBlockIdx] < (currentBlockIdx - 1)) {
          const min = result[currentBlockIdx];;
          result[currentBlockIdx] = min;
          return;
        }
        
        result[currentBlockIdx]= currentBlockIdx - i;
        return
      }
  }
}

function apartmentHunting(blocks, reqs) {
  let finalBlockArray=[];
  for (let r=0; r < reqs.length; r++) {
    let key=reqs[r];
    let reqBlockArray = new Array(blocks.length);

    // req from left to right
    for(let i=0; i<blocks.length; i++) {
      reqDistanceFromCurrentBlockLeft(key, i, blocks, reqBlockArray)
    }
    console.log(key, reqBlockArray)

    // req from right to left
    for (let i=blocks.length-1; i>=0; i--) {
      reqDistanceFromCurrentBlockRight(key, i, blocks, reqBlockArray) ;
    }
    console.log(key, reqBlockArray)
    finalBlockArray.push(reqBlockArray);
  }
  // console.log(finalBlockArray);
  let maxArray = [];
  for (let i=0; i<blocks.length; i++) {
    let max=0;
    for (let arr in finalBlockArray) {
        if (max < finalBlockArray[arr][i]) {
          max = finalBlockArray[arr][i]
        }
    }
    maxArray.push(max);
  }

  console.log(maxArray)
const minValueIdx =maxArray.indexOf(Math.min(...maxArray));

  return minValueIdx;
 
}

const test1 = [
  {
    "gym": false,
    "school": true,
    "store": false
  },
  {
    "gym": true,
    "school": false,
    "store": false
  },
  {
    "gym": true,
    "school": true,
    "store": false
  },
  {
    "gym": false,
    "school": true,
    "store": false
  },
  {
    "gym": false,
    "school": true,
    "store": true
  }
];

const reqs = ["gym", "school", "store"];

const testblock6 = [
  {
    "gym": true,
    "pool": false,
    "school": true,
    "store": false
  },
  {
    "gym": false,
    "pool": false,
    "school": false,
    "store": false
  },
  {
    "gym": false,
    "pool": false,
    "school": true,
    "store": false
  },
  {
    "gym": false,
    "pool": false,
    "school": false,
    "store": false
  },
  {
    "gym": false,
    "pool": false,
    "school": false,
    "store": true
  },
  {
    "gym": true,
    "pool": false,
    "school": false,
    "store": false
  },
  {
    "gym": false,
    "pool": false,
    "school": false,
    "store": false
  },
  {
    "gym": false,
    "pool": false,
    "school": false,
    "store": false
  },
  {
    "gym": false,
    "pool": false,
    "school": false,
    "store": false
  },
  {
    "gym": false,
    "pool": false,
    "school": true,
    "store": false
  },
  {
    "gym": false,
    "pool": true,
    "school": false,
    "store": false
  }
];

const testreqs6= ["gym", "pool", "school", "store"];

const testBlock7=[
  {
    "gym": true,
    "office": false,
    "pool": false,
    "school": true,
    "store": false
  },
  {
    "gym": false,
    "office": false,
    "pool": false,
    "school": false,
    "store": false
  },
  {
    "gym": false,
    "office": true,
    "pool": false,
    "school": true,
    "store": false
  },
  {
    "gym": false,
    "office": true,
    "pool": false,
    "school": false,
    "store": false
  },
  {
    "gym": false,
    "office": false,
    "pool": false,
    "school": false,
    "store": true
  },
  {
    "gym": true,
    "office": true,
    "pool": false,
    "school": false,
    "store": false
  },
  {
    "gym": false,
    "office": false,
    "pool": true,
    "school": false,
    "store": false
  },
  {
    "gym": false,
    "office": false,
    "pool": false,
    "school": false,
    "store": false
  },
  {
    "gym": false,
    "office": false,
    "pool": false,
    "school": false,
    "store": false
  },
  {
    "gym": false,
    "office": false,
    "pool": false,
    "school": true,
    "store": false
  },
  {
    "gym": false,
    "office": false,
    "pool": true,
    "school": false,
    "store": false
  }
]
const testReqs7 = ["gym", "pool", "school", "store"]

console.log(apartmentHunting(testBlock7, testReqs7));
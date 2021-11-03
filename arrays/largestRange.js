const test1 = [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6];
const test6 = [8, 4, 2, 10, 3, 6, 7, 9, 1];
const test3 = [1,2];
const test7 = [19, -1, 18, 17, 2, 10, 3, 12, 5, 16, 4, 11, 8, 7, 6, 15, 12, 12, 2, 1, 6, 13, 14];
// Time complexity O(NlogN) + N = NLogN
function largestRange(array) {
 array.sort((a,b) => a-b);
 let hashValues = {};
 let tempArray= new Set();
 if(array.length === 1) {
   return [array[0], array[0]]
 }
 console.log(array)
 for(let i=0; i<array.length; i++) {
  if ((array[i] === (array[i+1] -1)) || (array[i] === (array[i+1]))) {
    tempArray.add(array[i]);
  } else {
    tempArray.add(array[i]);
    hashValues[i]=tempArray;
    tempArray = new Set()
  }
 }
console.log(hashValues)
let max=0;
let maxIndex=null;
for (const item in hashValues) {
  console.log(item, hashValues[item].size, max);
  if (max < hashValues[item].size) {
    max=hashValues[item].size;
    maxIndex=item
  }
}
console.log('max', max, maxIndex)
const finalVaue = [...hashValues[maxIndex]];

const result =[finalVaue[0], array[maxIndex]];
// console.log(result)
return result;
}

console.log(largestRange(test1)) 
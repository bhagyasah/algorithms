const tempArray = new Set();
let array = [1,2,3,4,7,8,2,3]
for(let i=0; i<array.length; i++) {
  tempArray.add(array[i])
}
console.log([...tempArray])
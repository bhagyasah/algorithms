
function zigzagTraverse(array) {
  // Write your code here.
  let row=0;
  let col=0;
  let height=array.length - 1;
  let width=array[0].length - 1;
  let goDown = true;
  let result = [];
  while(!isOtOfBounds(row, col, height, width)) {
    result.push(array[row][col]);
    if (goDown) {
      if (col === 0 || row === height) {
        goDown=false;
        if (row === height) {
          col++;
        } else {
          row++;
        }
      } else {
        row++;
        col--;
      }
    } else {
      if (row === 0 || col === width) {
        goDown=true;
        if (col === width) {
          row++
        } else {
          col++;
        }
      }else {
        row--;
        col++;
      }
    }
  }
  return result;

}

function isOtOfBounds(row, col, height, width) {
  return row < 0 || row > height || col < 0 || col>width;
}


const test1 = [8, 4, 2, 1, 3, 6, 7, 9, 5];
const test6 = [0, 4, 2, 1, 3];
const test7 = [2, 20, 13, 12, 11, 8, 4, 3, 1, 5, 6, 7, 9, 0];
const test9 = [800, 400, 20, 10, 30, 61, 70, 90, 17, 21, 22, 13, 12, 11, 8, 4, 2, 1, 3, 6, 7, 9, 0, 68, 55, 67, 57, 60, 51, 661, 50, 65, 53]

function minRewards(scores) {
  // Write your code here.
  let rewards = [];
  let leftScore = 1;
  let rightScore = 0;
  console.log(scores);
  for(let left=0; left < scores.length; left++) {
    if (scores[left-1] < scores[left]) {
      leftScore++;
      rewards.push(leftScore);
    } else {
      leftScore=1
      rewards.push(0);
    }
  }

  console.log('after left',rewards);

  for(let right=scores.length -1; right >= 0; right--) {
    if (scores[right-1] > scores[right]) {
      if ((rewards[right-1]  > 0) && (rewards[right] !== rewards[rewards.length - 1])) {
        console.log('exception found', scores[right])
        rightScore++;
        rewards[right]= rightScore;
        rewards[right - 1] = rewards[right -1] <= rightScore ? rightScore + 1 : rewards[right - 1];
      } else {
        rightScore++;
        rewards[right]= rightScore;
      }
     
    } else if (right === 0) {
      rightScore++;
      rewards[0]=rightScore;
    } else {
      rightScore=0
    }
  }
  console.log('after right', rewards);
  const sumReward = rewards.reduce((t,a,i) => {
    t+=a;
    return t;
  }, 0)
  return sumReward;
}

minRewards(test6);

[800, 400,  20, 10, 30, 61, 70, 90, 17, 21,  22,  13, 12, 11,  8,  4,  2,  1, 3,   6,   7,  9,  0, 68, 55, 67, 57, 60,  51, 661, 50, 65, 53]
[4,   3,    2,  1,  2,  3,  4,  2, 1,   2,   8,  7,  6,   5,  4,  3,  2,  1, 2,   3,    4,  2,  1, 2,  1,  2,  1,  2,   1,  2,   1,  2,  1]

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const A = [1,2,3,4,5,6,1,2]

function solution(A) {
  // write your code in JavaScript (Node.js 14)
  A.sort((a, b) => {
      return a - b;
  });

  let verify = 0;

  const verifyGreaterThanZero = A.find((item) => item > 0);

  if(!verifyGreaterThanZero) {
      return 1
  } 

  let result = 0;
  for(let i = 0; i < A.length - 1; i++) {
    if((A[i + 1] - A[i]) > 1 && A[i + 1]) {
      result = A[i] + 1
    }
  }

  if(result === 0) {
    return A[A.length - 1] + 1
  }
  else {
    return result
  }
}

console.log(solution(A));
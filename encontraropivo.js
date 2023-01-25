var pivotIndex = function(nums) {
  let pivot = -1;
  const arraySize = nums.length;
  let cont = arraySize - 1;

  if(arraySize === 1) {
    return 0;
  }
  // const it = nums[Symbol.iterator]();

  while (cont >= 0) {
    let left = 0;
    let right = 0;

    if(nums[cont - 1] === undefined) {
      left = 0;
    } 
      
    if(nums[cont + 1] === undefined) {
      right = 0;
    } 

    for(let i = nums.length - 1; i >= 0; i--) {
      if(i === cont) {
        continue;
      }

      if(i < cont) {
        left += nums[i];
      } else {
        right += nums[i];
      }
    }

    if(left === right) {
      pivot = cont;
    }

    cont--;
  }

  return pivot;
};

// console.log(pivotIndex([1,7,3,6,5,6]))
console.log(pivotIndex([2,1,-1]))
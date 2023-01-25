/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  let aux = [nums[0]];

  for(let i = 1; i < nums.length; i++) {
    const result = aux[i - 1] + nums[i];
    aux.push(result);
  }

  return aux;
};

console.log(runningSum([3,1,2,10,1]));
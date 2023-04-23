function SumMultiplier(arr) { 
  let count = 0;
  let verify = false;

  const totalSum = arr.reduce((acc, current) => {
    return acc + current
  }, 0)


  while (count < arr.length - 1) {

    for (let i = 0; i < arr.length; i++) {
      if(i !== count) {
        if ((arr[count] * arr[i]) > (totalSum * 2)) {
          verify = true
        }
      }
    }
    count = count + 1
  }
  
  return verify; 

}
   
// keep this function call here 
console.log(SumMultiplier([1, 8, 2, 25]));
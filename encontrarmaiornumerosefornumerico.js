
const numbers = ["a", 45, 4, 17, "peixe", 6, undefined, null]

const solution = (numbers) => {
    
  const onlyNumbers = numbers.filter(n => typeof n === "number")

  if(onlyNumbers.length > 0) {
    const largest = onlyNumbers.sort((a, b) => b - a)[0]
    return largest
  }

  return 0

};

console.log(solution(numbers))
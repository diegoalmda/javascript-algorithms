const arr = [3, 6, 9, 2, 10, -1, 87];
const total = (sequence) => sequence.reduce((acc, current) => acc + current, 0)

const solution = (arr) => {
  const index = arr.indexOf(-1)
  const onlyNumbers = arr.filter(n => typeof n === "number")

  if (index !== -1) {
    const arrayLeft = onlyNumbers.slice(0, index)
    const arrayRight = onlyNumbers.slice(index + 1)

    const left = total(arrayLeft)
    const right = total(arrayRight)

    if (left === right) {
      return 0
    }

    return left > right ? "Left" : "Right"
  }
  return 0
};

console.log(solution(arr))
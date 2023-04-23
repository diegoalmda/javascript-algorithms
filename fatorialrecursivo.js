const fatorial = (numero) => {
  if (numero < 0) return false;
  return numero === 0 ? 1 : numero * fatorial(numero - 1);
};

function printObjectData(obj) {

  Object.keys(obj).forEach(key => {
    const value = obj[key];
    console.log(key, value);
  })

  for (const [key, value] of Object.entries(obj)) {
    console.log(key, value)
  }
}

function countWord(words) {
  const result = words.reduce((accumulator, actualWord) => {
    if(actualWord in accumulator) {
      accumulator[actualWord]++;
    } else {
      accumulator[actualWord] = 1;
    }
    return accumulator;
  }, {})

  return result
}

function totalSum(aa) {
  total = aa.reduce((accumulator, current) => {
    return accumulator + current
  },0 )

  console.log(total)
}

printObjectData({ name: "Diego", role: "Developer" })
console.log(fatorial(4))
console.log(countWord(["banana", "morango", "abacaxi", "banana", "banana"]))

totalSum([9,5])
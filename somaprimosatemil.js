function isPrime(num) {
  if(num < 2) return false;
  
  for (let i = num - 1; i > 1; i--) {
      if(num % i === 0) return false;
  }
  
  return true;
}

function main () {
  const primeNumbers = [];
    
    for (let i = 1; i <= 1000; i++) {
        primeNumbers.push(i);
    }
    
    return primeNumbers.filter(item => isPrime(item)).reduce((total, current) => total + current, 0)
}

const coiso = main()

console.log(coiso)
const s = "XCIX";

const map = {
  "I": 1, 
  "V": 5, 
  "X": 10, 
  "L": 50, 
  "C": 100, 
  "D": 500, 
  "M": 1000
}

const figures = s.split("");
let total = map[figures[0]];

if (figures.length === 1) { 
  console.log(total);
} else {

  for(let i = 1; i < figures.length; i++) {
    if(map[figures[i]] <= map[figures[i - 1]]) {
      total += map[figures[i]];
    } else {
      total = (total - map[figures[i - 1]] * 2 + map[figures[i]]);
    }
  }
  console.log(total);  
}

function convertToRoman(num) {
  const numerals = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
  }

  let result = '';
  const decimalKeys = Object.keys(numerals).reverse();

  decimalKeys.forEach(key => {
    while(key <= num) {
      result += numerals[key];
      num -= key;
    }
  });
  return result;
}

console.log(convertToRoman(99));
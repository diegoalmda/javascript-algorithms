// let lines = gets().split("\n"); 
// let n = parseInt(lines.shift()); 
let n = 20;
let r = n;
let cont = 1;
const results = [];
let soma = 0;
let subtrai = 0;

if (n <= 2) { 
 console.log(n); 
} else {
  while (n > 1) { 
    if(cont > 4) {
      cont = 1;
    }
    
    n--;

    if(cont === 1) {
      r *= n;
      results.push(r);
    } 
    if(cont === 2) {
      r = Math.round(r / n);
      results.pop();
      results.push(r);    
    }
    if(cont === 3) {    
      results.push(n);      
    }
    if(cont === 4) {      
      r = n;
    }    
    cont ++;
  }
  
  soma = results[0]; 
  for(let i = 1; i < results.length; i++) {     
    if(i % 2 === 0) {
      subtrai += results[i];
    } else {
      soma += results[i];
    }
  }
  console.log(soma - subtrai);
}

// let r = n;
// let cont = 1;
// const signals = [];
// const numbers = [];
// let operation = `${n}`;
// // Math.trunc(n);
// if (n <= 2) { 
//  print(n); 
// } else {
//   while (n > 1) { 
//     if(cont > 4) {
//       cont = 1;
//     }
//     n--;
//     if(cont === 1) {
//       // r *= n;
//       operation += `*${n}`
//       signals.push('*');
//     } 
//     if(cont === 2) {
//       // r = Math.round(r / n);
//       operation += `/${n}`
//       signals.push('/');
//     }
//     if(cont === 3) {
//       // r += n;
//       operation += `+${n}`
//       signals.push('+');
//     }
//     if(cont === 4) {
//       // r -= n;
//       operation += `-${n}`
//       signals.push('-');
//     }
//     cont ++;
//   }
//   print(Math.round(eval(operation)));
// }


// 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1
// 11 + 7 - 7 + 3 - 2 = 12



// 12 * 11 / 10 + 9 - 8 * 7 / 6 + 5 - 4 * 3 / 2 + 1
// 13 + 9 - 9 + 5 - 6 + 1 = 13

// 20 * 19 / 18 + 17 - 16 * 15 / 14 + 13 - 12 * 11 / 10 + 9 - 8 * 7 / 6 + 5 - 4 * 3 / 2 + 1
// 21 + 17 - 17 + 13 - 13 + 9 - 9 + 5 - 6 + 1 = 21
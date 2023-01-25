// let A = parseInt(gets()), B= parseInt(gets()); 
const A = 20;
const B = 25;
 
const result = Math.ceil(Math.abs(B - A));

const calc = Math.floor((result * 100) / A);

console.log(calc + '%')
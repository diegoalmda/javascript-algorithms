let N = [1, 0, 2, 3, 0, 4, 5, 0];

let aux = []; 

for (let i = 0; i < N.length; i++) {
  if(N[i] === 0) {
    aux.push(0);
  } 
  aux.push(N[i]);
  console.log(aux[i]);
}


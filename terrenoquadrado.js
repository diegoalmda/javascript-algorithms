function getResult(ground) {
  let cont = 0;
  let verify = true;

  

  while(verify) {
      for(let i = 0; i < ground.length; i++) {
          if(ground[i] === 2) {
              continue;
          }else if (ground[i] === 2){
              ground[i] = ground[i] = 2;
              cont = cont + 1;
          } else if(ground[i] < 2){
              ground[i] = 2;
              cont = cont + 1;

          }else {
              ground[i] = ground[i] - 1;
              cont = cont + 1;
          }
      }
      verify = ground.some((item) => item !== 2)
  }


  return cont;
}
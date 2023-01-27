let time = ["07-09", "10-12", "15-19"]
let x = [];
let valid = false;

  for(let i = 0; i < time.length; i++) {
      x.push(Number(time[i].split('-')[0]));
      x.push(Number(time[i].split('-')[1]));
  }
  
  for(let i = 1; i < x.length - 2; i++) {
      if(x[i] <= x[i+1]) {
          valid = true
      }
      
      if(x[i+1] < x[i]) {
          valid = false
      }
  }

  console.log(valid);
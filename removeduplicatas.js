const s = 'aabbcc'; 

	let result = ''; 
  

	for (let index = 0; index < s.length; index++) { 

		const str = s[index]; 
    const last = result[result.length - 1]; 
    
    if(last === str) {
      continue
    } else {
      result += str;
    }
		
	} 

	console.log(result);
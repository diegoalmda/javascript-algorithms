function verifyOptionSelected(option) {
  let foundItem = false;
  if(selectedOptions.length > 0) {            
      foundItem = selectedOptions.some(item => item === option);
  }
  return foundItem;
}

const data = {Germany: 'Berlin', Azerbaijan: 'Baku', Poland: 'Warszawa', Papua New Guinea: 'Port Moresby'};
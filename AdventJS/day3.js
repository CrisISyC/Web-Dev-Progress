function organizeInventory(inventory) {
  const result = {}
  
    for (let x of inventory) {
      result[x.category] = {}
    }
    
    for(let toy of inventory){

      let category = toy.category;
      let key = toy.name;
      if(result[category][key]){

        result[category][key] += toy.quantity
      }else{
        result[category][key] = toy.quantity
      }

    }

    return result
  }


  const inventory = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
  ]
  

  console.log(organizeInventory(inventory))





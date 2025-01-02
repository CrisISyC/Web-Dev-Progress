function organizeShoes(shoes){

  let result = []

  for (let shoe of shoes){

    let sizeToFind = shoe.size;
    let typeToFind = shoe.type;

        

    if (typeToFind == "I"){

      for( let shoe1 of shoes){

        let sizeToFind1 = shoe1.size;
        let typeToFind1 = shoe1.type;

        if (typeToFind1 == "R" && sizeToFind == sizeToFind1){
            result.push(sizeToFind);
            shoe.size = NaN
            shoe1.size = NaN
            shoe.type = NaN
            shoe1.type = NaN

            break
        }
      }
    }
  }  
  return result
}

const shoes = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
  { type: 'R', size: 38 }
]
  
  console.log(organizeShoes(shoes))
  // [38, 42]
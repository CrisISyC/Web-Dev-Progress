//find()

const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);
console.log(first);


function myFunction(value, index, array) {
  return value > 18;
}


//findIndex()

const numbers1 = [4, 9, 16, 25, 29];
let first1 = numbers.findIndex(myFunction);
console.log(first1);

function myFunction(value, index, array) {
  return value > 18;
}



//findLastIndex()

const temp = [27, 28, 30, 40, 42, 35, 30];
let pos = temp.findLastIndex(x => x > 40);
console.log(pos);

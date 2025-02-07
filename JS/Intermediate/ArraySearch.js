//find()

const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);
console.log(first);   //25


function myFunction(value, index, array) {
  return value > 18;
}


//findIndex()

let first1 = numbers.findIndex(myFunction);
console.log(first1);

function myFunction(value, index, array) {
  return value > 18; //3
}

//With arrowFunction 

let first2 = numbers.findIndex(x=> x>18);
console.log(first2)   //3

//findLastIndex()

const temp = [27, 28, 30, 40, 42, 35, 30];
let pos = temp.findLastIndex(x => x > 40);
console.log(pos);  //4

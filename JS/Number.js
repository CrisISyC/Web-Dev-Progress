let num1 = 255; // integer
let num2 = 255.0; // floating-point number with no fractional part
let num3 = 0xff; // hexadecimal notation
let num4 = 0b11111111; // binary notation
let num5 = 0.255e3; // exponential notation

console.log(num1 === num2); // true
console.log(num1 === num3); // true
console.log(num1 === num4); // true
console.log(num1 === num5); // true


let x = "100";
let y = "10";
let z = x *y;

console.log(z)


let myNumber = 2;
// Execute until Infinity
while (myNumber != Infinity) {
  myNumber = myNumber * myNumber;

  console.log(myNumber)
}
  

let a = 123;
let b = new Number(123);

if(a==b){
    console.log("Son iguales")
}
else{
    console.log("No son iguales")
}
console.log(a)
console.log(b)


let c = new Number(500);
let d = new Number(500);

if(c===d){
    console.log("Son iguales")
}
else{
    console.log("No son iguales")
}

console.log(Boolean("false"))
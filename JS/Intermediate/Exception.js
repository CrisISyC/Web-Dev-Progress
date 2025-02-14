function myFunction(x) { 
  try { 
    if(x == "")  throw "is Empty";
    if(isNaN(x)) throw "not a number";
    if(x > 10)   throw "too high";
    if(x < 5)    throw "too low";
  }
  catch(err) {
    console.log("Input "+ x + " " + err);      
  }
}

  
myFunction("");
myFunction();
myFunction(11);
myFunction(1);
myFunction(6);


let num = 1;
try {
  upper = num.toUpperCase();
  console.log(upper);
}
catch(err) {
  console.log(err);
}


let x = 5;
//let y = 3

try {
  x = y + 1;   // y cannot be used (referenced)
  console.log(x);
}
catch(err) {
  console.log(err);
  
}


let final = 1;
try {
  upper = final.toUpperCase();
  console.log(upper);
}
catch(err) {
  console.log(err);
}
finally {
  console.log("This run regardless the err");
}
function myFunction(x) { 
    try { 
      if(x == "")  throw "is Empty";
      if(isNaN(x)) throw "not a number";
      if(x > 10)   throw "too high";
      if(x < 5)  throw "too low";
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
  num.toUpperCase();
}
catch(err) {
  console.log(err);
}


let x = 5;
try {
  x = y + 1;   // y cannot be used (referenced)
}
catch(err) {
  console.log(err);
  
}


let w = 10;
function myFunc() {
  let w = 20;
  console.log(w);
}
myFunc();
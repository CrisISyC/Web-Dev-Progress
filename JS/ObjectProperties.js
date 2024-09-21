const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
console.log(person);

person.nationality = "Colombian"
console.log(person);

delete person.eyeColor;
console.log(person);



//Nested Objects
myObj = {
  name:"John",
  age:30,
  myCars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}


console.log(myObj.myCars.car2);

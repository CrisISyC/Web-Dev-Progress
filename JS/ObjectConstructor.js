function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
  

// Create a Person object
const me = new Person("Cristian", "Barrera", 23, "Brown");

const myBrother = new Person("Luis", "Beltran", 33, "Brown");

for (let x in me){
    console.log(x + " " + me[x]);
}

for (let y in myBrother){
    console.log(myBrother[y]);
    
}
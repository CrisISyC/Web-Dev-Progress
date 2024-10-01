// this keyword
const obj = {
    name: "Cristian",
    lastName: "Barrera",
    sayName: function() {
        console.log(this.name); // 'this' hace referencia a 'obj'
        console.log(this.lastName);
        
    }
};

obj.sayName(); // Output: "Cristian"


// call()  &  apply() Methods
function greet(greeting) {
    console.log(greeting + ", " + this.name);
}

const person = { name: "Cristian" };

greet.call(person, "Hola"); // Output: "Hola, Cristian"
greet.apply(person, ["Hola"]); // Output: "Hola, Cristian"


// bind()   Method
const person2 = {
    firstName:"Cristian",
    lastName: "Barrera",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
const member = {
    firstName:"Luis",
    lastName: "Beltran",
}
  
let fullName = person2.fullName.bind(member);
  
console.log(fullName() + " " +person2.fullName());



const obj2 = {
    name: "Cristian",
    sayName: () => {
        console.log(this.name); // 'this' se refiere al contexto exterior, no a 'obj'
    }
};

try{
    console.log(obj2.sayName()); // Output: undefined, porque 'this' se refiere al contexto globals
}
catch(err){
    console.log(err)
}
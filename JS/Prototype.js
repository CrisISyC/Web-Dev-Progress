class Person{

  constructor(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }

}

  
Person.prototype.nationality = "English";

const Dad= new Person("Benjamin", "Barrera", 66, "Grey")
const Mom= new Person("Sandra", "Rodriguez", 66, "Grey")

console.log(Mom)
Mom = Dad;

console.log(Mom)
console.log(Dad);
Dad.nationality = "sapo";
console.log(Dad.nationality);


class Car {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}

const MyCar = new Car("volvo",1998);

console.log(MyCar);


/*//Function
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
};

const Brother = new Person("Gabriel", "Beltran", 33, "Brown")

console.log(Brother);
console.log("My brother is " + Brother.name() + " and his nationality is " + Brother.nationality);
console.log(Brother.nationality);

console.log(Dad.name());
*/

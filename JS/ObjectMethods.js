const person = {
    firstName: "Cristian",
    lastName: "Barrera",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };


console.log(person.fullName());

person.name = function () {
    return this.firstName + " " + this.lastName;
  };


console.log(person);

console.log(person.name());


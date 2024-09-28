//For
console.log("For");

for(let i = 0; i < 3; i++){
    console.log("For " + i);
    
}

//For of 
console.log("For of");
const cars = ["BMW", "Volvo", "Mini"];

for (let x of cars) {
  console.log(x);
}

//For in 
console.log("For in");
{
    const person = {fname:"John", lname:"Doe", age:25};
    
    for (let x in person) {
        console.log(`${x}: ${person[x]}`);
    }
    console.log(person["fname"])
    console.log(person[0])
}

//For Each
console.log("For Each");
const numbers = [45, 4, 9, 16, 25];
console.log(numbers);
numbers.forEach(value => console.log(value*2));



//While
console.log("While");
var count = 0
while(count < 3){
    console.log("While " + count)
    count++
}

//Do While
console.log("Do While");
let i = 0;
do {
    
    console.log("Do While " + i);
    i++;
}
while (i < 3);
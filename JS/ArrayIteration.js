// map()

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(value => value*2);

console.log(numbers1);
console.log(numbers2);

// flatMap()
const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((x) => x * 2);

console.log(myArr);
console.log(newArr);



// Differences between map()  flatMap()
const sentences = ["Hello world", "How are you?"];


const mapResult = sentences.map(sentence => sentence.split(" "));
console.log(mapResult); 

const flatMapResult = sentences.flatMap(sentence => sentence.split(" "));
console.log(flatMapResult); 


//filter()

const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(value => value>18);
console.log(over18);



// reduce()
const numbers3 = [45, 4, 9, 16, 25];
let sum = numbers3.reduce((total,value)=> total+value);

console.log(sum);

const personas = [
    { nombre: "Juan", edad: 20 },
    { nombre: "Ana", edad: 20 },
    { nombre: "Carlos", edad: 20 },
    { nombre: "Cristian", edad: 24 },
    { nombre: "Andres", edad: 24 },
    { nombre: "Gabriel", edad: 25 },
];

const agrupadoPorEdad = personas.reduce((acumulador, persona) => {
    if (!acumulador[persona.edad]) {
        acumulador[persona.edad] = [];
    }
    acumulador[persona.edad].push(persona.nombre);
    return acumulador;
}, {});

console.log(agrupadoPorEdad);


// every()

const numbers4 = [45, 2, 29, 126, 25];
let allOver18 = numbers4.every(value=> value>18);
console.log(allOver18);


// some()

let someOver18 = numbers4.some(value=> value>18);
console.log(someOver18);


// Array.from()

const myArr2 = Array.from("abcdefg")
console.log(myArr2);


// ...

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);

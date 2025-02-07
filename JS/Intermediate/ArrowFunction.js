
const numeros = [5, 12, 8, 130, 44];
const mayoresADiez = numeros.filter(function(numero) {
  return numero > 10;
});

const numeros2 = [5, 12, 8, 130, 44];
const mayoresADiez2 = numeros2.filter(numero => numero > 10);


// Sorting
const points = [40, 100, 1, 5, 25, 10];

// Function
points.sort(function(a, b){
    return a - b
    });
console.log("Function " + points);

// Arrow Function
points.sort((a,b) => a-b);
console.log("Arrow Function " + points);

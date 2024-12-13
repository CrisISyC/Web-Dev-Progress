const points = [40, 100, 1, 5, 25, 10];

//Como son string es necesario pasarle la funcion de comparación
points.sort();
console.log(points);


//The compare function should return a negative, zero, or positive value, depending on the arguments:

// Ascending
points.sort(function(a, b){
    return a - b
    });
console.log(points);

// Descending
points.sort(function(a, b){
    return b - a
    });
console.log(points);


console.log(Math.max.apply(null, points));
console.log(Math.min.apply(null,points));


//Objects

const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];


cars.sort(function(a, b){
    return a.year - b.year
    });

console.log(cars);

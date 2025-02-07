const points = [40, 100, 1, 5, 25, 10];

//We need pass the sorted functions
points.sort();
console.log(points);   // [1,10,100,25,40,5]


//The compare function should return a negative, zero, or positive value, depending on the arguments:

// Ascending
points.sort(function(a, b){
    return a - b
    });
console.log(points);   //[1,5,10,25,40,100]

//with arrowFunction
points.sort((a,b)=> a-b)
console.log(points)    //[1,5,10,25,40,100]

// Descending
points.sort(function(a, b){
    return b - a
    });
console.log(points);   //[100,40,25,10,5,1]

//arrowFunction
points.sort((a,b)=> b-a)
console.log(points);   //[100,40,25,10,5,1]


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

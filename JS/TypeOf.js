//String
var nombre = "Cristian";
let apellido = "Barrera";
const cedula = "1204124";

//Number
let num = 14;
let Num = 15;

//Boolean
var bool = true;
let bool1 = true;
const bool2 = false;

//Objeto
var empleado = {
    nombre: "Cristian",
    apellido: "Barrera",
    edad: 24,
    email: "cbarrerar@unal.edu.co"
};

//Class
class Car {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}

var MyCar = new Car("Volvo", 2016);

//Function
function MyFunc(a) {
    return a
}

//Date
let CurrentlyDate = new Date();
console.log(CurrentlyDate);

console.log(MyCar);
console.log(MyCar.name)
console.log(typeof(nombre), nombre)
console.log(typeof(apellido), apellido)
console.log(typeof(cedula),cedula)
console.log(typeof(num),num)
console.log(typeof(Num),Num)
console.log(typeof(bool), bool)
console.log(typeof(bool1), bool1)
console.log(typeof(bool2), bool2)
console.log(typeof(empleado), empleado.nombre)
console.log(typeof(MyCar), MyCar.name)
console.log(typeof(MyFunc(2)), MyFunc(2))
console.log(typeof(CurrentlyDate), CurrentlyDate)



const Euler = Math.E
const Pi = Math.PI
console.log(typeof(Euler), Euler);
console.log(typeof(Pi), Pi);


console.log(
"john".constructor +
(3.14).constructor +
false.constructor+
1234n.constructor+
{}.constructor+
[].constructor+
new Date().constructor+
new Set().constructor+
new Map().constructor+
function () {}.constructor );

console.log(typeof "holi");

var big = 123n
console.log(typeof big, big);

log
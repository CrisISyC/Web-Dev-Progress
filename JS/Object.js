var empleado = {
    nombre: "Cristian",
    apellido: "Barrera",
    edad: 24,
    email: "cbarrerar@unal.edu.co"
};

console.log(empleado.email)
console.log(empleado.edad)
console.log(empleado.nombre +" "+ empleado.apellido)

const myArray = Object.values(empleado);

console.log(empleado);
console.log(myArray);

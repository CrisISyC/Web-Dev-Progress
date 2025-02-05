/*const saludar = function(nombre){

    return "Hola " + nombre;
}

console.log(saludar)
console.log(saludar())
console.log(saludar("Cristian"))



const a = "Hola ";

function global(){
    const b = "Mundo ";

    function local(){
        const c = "Closure"
        return a + b + c;
    }

    return local;
}

console.log(global())                   //Return the Function
console.log(global()())                 //Return the value a + b + c

const closure = global();               
console.log(closure)                    //Return the Function
console.log(closure())                  //Return the value a + b + c*/


//--------------------------------------------------------------------------------------//

/*function crearCaja() {
    let contenido = "Secreto";
  
    return {
      leer: function () {
        return contenido;
      },
      escribir: function (nuevoContenido) {
        contenido = nuevoContenido;
      },
    };
  }
  
  const miCaja = crearCaja();
  console.log(miCaja.leer()); // "Secreto"
  miCaja.escribir("Nuevo secreto");
  console.log(miCaja.leer()); // "Nuevo secreto"
  

  console.log(contenido)  //contenido is not defined, because y "private" */    

//--------------------------------------------------------------------------------------//


const myCounter = (function(){
    let _counter = 0;            //Good practices when is private var use before name "_"

    function increase(){
        return _counter++;
    }

    function decrease(){
        return _counter--;
    }

    function printValue(){
        return console.log(_counter);
    }

    return{
        increase,
        decrease,
        printValue
    }
})();

myCounter.printValue();     //0
myCounter.increase();
myCounter.increase();
myCounter.increase();
myCounter.printValue();     //3
myCounter.decrease();
myCounter.printValue();     //2

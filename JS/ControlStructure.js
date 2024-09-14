//codigo condicional

var balance = 1;

//if
if (balance > 0){
    console.log("Melo");
}else{
    console.log("No melo");
}

//switch
var combustible = prompt();

switch(combustible){
    case "diesel":
        console.log("0.05");
        break;
    case "gasolina":
        console.log("1.05");
        break;
    default:
        console.log("No es un combustible");
    }

//while
var cantidad = 0
var i = 0
while( i < 5){
    console.log("while: " + cantidad)
    cantidad++
    i++
}

//for
for(let i = 5; i < 10; i++ ){
    console.log("for: " + i)
}


//Do while

var a = 10;

do{
    console.log("Do while: " + a);
    a++
}while (a < 15);
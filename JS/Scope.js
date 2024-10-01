// var, let and const

//Global scope
var x = 1;
let y = 2;
const z = 3;


//Block scope or Local scope
{
    let y = 4;
    //console.log("y = " +y)
}
console.log("y = " + y)  //result y = 2


//Function scope
function myfunc(){
    const z = 5; 
    return z
}
console.log("myfunc = " + myfunc())    //result myfunc = 5 
console.log("z = " + z);               //result z = 3 

/*Error Assignment because z is a constant
z = 4
console.log("z = " + z);*/


{
    var x = 6
    //console.log("x = " + x)
}
console.log("x = " + x)    //result x = 6





// var, let and const

//global scope
var x = 1;
let y = 2;
const z = 3;


//local scope
{
    let y = 4;
    //console.log("y = " +y)
}
console.log("y = " + y)


//local scope
function myfunc(){
    const z = 5; 
    return z
}
console.log("myfunc = " + myfunc())
console.log("z = " + z);

/*Error Assignment to constant variable.
z = 4
console.log("z = " + z);*/


{
    var x = 6
    //console.log("x = " + x)
}
console.log("x = " + x)





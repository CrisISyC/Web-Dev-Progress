// var, let and const

//global scope
var x = 1;
let y = 2;
const z = 3;


//local scope
{
    let y = 4;
    console.log(y)
}

//local scope
function myfunc(){
    const z = 5; 
    return z
}

{
    var x = 6
    //console.log(x)
}

console.log(myfunc())
console.log(x)
console.log(y)
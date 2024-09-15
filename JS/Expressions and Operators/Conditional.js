function voteable(age){
    return (age < 18) ? "Too young":"Old enough";  //Ternary operator
}  

let age = 18
console.log(voteable(age));

age = 16
console.log(voteable(age));


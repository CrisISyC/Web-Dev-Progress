let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i ;
  console.log(text);
  text = ""
}


for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i ;
  console.log(text);
  text = ""
}


for(let j = 0; j < 10; j++){

  if (j === 7) {
    console.log("Se alcanza el valor 7, se rompe el bucle.");
    break; // El bucle se detiene cuando count es igual a 7
  }
  
}
/* Give an intenger n, representing the height.
Draw a squeare

Example n = 4

X X X X
X     X
X     X
X X X X
*/

function square(n) {
  let marco = "X ";
  let espacios = " "; 
  let resultado = ""; 

  // Generar el marco
  for (let i = 0; i < n; i++) {
    if (i == 0 || i == n - 1) {
      resultado += marco.repeat(n).trim() + "\n"; //
    } else {
      resultado += "X" + espacios.repeat(n + (n - 3)) + "X" + "\n"; // 
    }
  }

  // Imprimir el resultado en el contenedor con id "output", usando <pre> para mantener los saltos de línea
  document.getElementById("output").innerHTML += `<pre>${resultado}</pre>`; // Usamos += para agregar sin reemplazar
}

// Llamar a la función square con diferentes tamaños de 1 a 10
for (let x = 1; x <= 10; x++) {
  square(x);  // Llama a la función 'square(x)' y pasa el valor de 'x' en cada iteración
}



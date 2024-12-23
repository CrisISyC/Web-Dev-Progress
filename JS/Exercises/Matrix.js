/* Draw a Spiral Matrix of size N x N 

Example n = 5

 1  2  3  4 5 
16 17 18 19 6
15 24 25 20 7
14 23 22 21 8           
13 12 11 10 9
*/


function draw_spiral_matrix(n){

    let matriz = [];
    let contador = 1;
    let fila = 0
    let filaVuelta = n-1
    let columna = n-1 
    let columnaVuelta = 0
    let ciclo = true;
    
    for (let i = 0; i < n; i++) {
      matriz[i] = []
    }

    while (ciclo){

      for (let i = columnaVuelta; i <= columna; i++){
        matriz[fila][i] = contador++
      }
      fila +=1


      for (let i = fila; i <= filaVuelta; i++){
        matriz[i][columna] = contador++
      }
      columna-=1


      for (let i = columna; i >= columnaVuelta; i--){
        matriz[filaVuelta][i] = contador++
      }
      filaVuelta-=1

      for (let i = filaVuelta; i >= fila; i--){
        matriz[i][columnaVuelta] = contador ++
      }
      columnaVuelta+=1

      
      if(contador==(n*n)+1){
        ciclo = false
      }


    }

    console.log(matriz.map(row => row.join(' ')).join('\n'));
}



draw_spiral_matrix(5)
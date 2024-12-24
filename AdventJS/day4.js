/*const tree = createXmasTree(5, '*')
console.log(tree)

____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/


function createXmasTree(height, ornament){

  let line = "_"
  let width = (height*2)-1
  let counter = height-1
  let counter2 = 1
  const result = []


  for (let j =0; j < height; j++){
    let tree = line.repeat(counter) + ornament.repeat(counter2) + line.repeat(counter)
    console.log(tree)
    result.push(tree)
    counter-=1
    counter2+=2
  }
  for ( let i = 0; i < 2; i++){
    let base = line.repeat(height-1) + "#" + line.repeat(height-1)
    console.log(base)
    result.push(base)
  }
  

  return result.join('\n');
}


createXmasTree(5,"+");
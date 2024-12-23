function createFrame(names) {
    // Code here
    let marco = "*"
    let espacio = " "

    let current = ""

    for (let x of names) {
      if (x.length > current.length){
        current = x;
      }
    }

    const long = current.length;
    const totalsize = long + 4;

    const result = []
    //Marco Superior 
    const border = marco.repeat(totalsize)
    result.push(border)

    let nombres ="";
    for (let i of names) {

      nombres = "* " + i + espacio.repeat(totalsize - i.length -4) + " *"
      result.push(nombres)
    }
    
    //Marco Inferior

    result.push(border)


    return result.join('\n');
  }


names=['Cristian', 'midu' , 'algooo']
console.log(createFrame(names));
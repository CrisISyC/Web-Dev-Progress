function inBox(box) {

    for( let i=0; i<box.length ; i++){
        if (box[i][0] === "*" || box[i][box[i].length-1] === "*"){
            return false
        }

        for(let j=0; j<box[i].length;j++){
            if (box[0][j] === "*" || box[box.length-1][j] === "*"){
                return false
            }
            if(box[i][j] === "*"){
                return true
            }
        }
    }
    return false
}


console.log(inBox([
    "#####",
    "# * #",
    "#   #",
    "#   *",
    "#####"
  ])) // ➞ true
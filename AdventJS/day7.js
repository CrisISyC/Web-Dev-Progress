function fixPackages(packages){
    let counter = 0;
    let counter1 = [];
    let counter2 = [];
    let result = packages.split("")

    for(x of result){
        
        if(x === "("){
            counter1.push(counter)
        }else if(x === ")"){
            counter2.push(counter)
        }
        counter++
    }

    console.log(counter1)
    console.log(counter2)
    let counter3 = 0

    for(let i=counter1.length-1; i>-1;i--){

        console.log(result.slice(counter1[i]+1,counter2[counter3]))
        delete result[counter1[i]];
        delete result[counter2[counter3]]
        let counterL = counter1[i]+1;
        let counterR = counter2[counter3]-1;

        while(counterL<counterR){
            let aux = ''
            let aux2 = ''
            
            if ( result[counterR] == undefined){
                counterR--
            }
            if (result[counterL] == undefined){
                counterL++
            }

            aux = result[counterR]
            aux2 = result[counterL]

            result[counterR] = aux2
            result[counterL] = aux   

            counterL++
            counterR--

        }

        counter3++
        
    }

    return result.join("")
}

console.log(fixPackages('a(b(c(d)))e'))
// ➞ "acbe"
// Volteamos "cb" dentro de los paréntesis
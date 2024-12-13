const gifts1 = [3, 1, 2, 3, 4, 2, 5]

function prepareGifts(gifts) {
    gifts.sort((a, b) => a - b); // Aseguramos el orden numérico correcto
    let gifts2 = [];
    
    for (let i = 0; i < gifts.length; i++) {
        if (gifts[i] !== gifts[i + 1]) {
            gifts2.push(gifts[i]);
        }
    }
    
    return gifts2;
}


const preparedGifts1 = prepareGifts(gifts1)
console.log(preparedGifts1) // [1, 2, 3, 4, 5]
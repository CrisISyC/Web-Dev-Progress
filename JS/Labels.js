
outerLoop: for (let i = 0; i < 3; i++) {
    console.log(`Outer loop: ${i}`);
    
    innerLoop: for (let j = 0; j < 3; j++) {
        console.log(`  Inner loop: ${j}`);
        
        if (j == 0 && i == 2) {
            break outerLoop; // Sale del bucle externo
        }
    }
}

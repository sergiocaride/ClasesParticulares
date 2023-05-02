function numAsteriscos(array) {
    let contador=0;
    array.forEach(element => {
        element.forEach(element2 => {
            if (element2=="*") {
                contador++;
            }
        });
        
    });

    return contador;
}

let array=[["*",5,"*","*",0,"*"],["*",5,"*","*",0,"*"],["*",5,"*","*",0,"*"]];
console.log(numAsteriscos(array));
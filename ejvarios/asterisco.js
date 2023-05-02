function numAsteriscos(array) {
    let contador=0;
    array.forEach(element => {
        if (element=="*") {
            contador++;
        }
    });

    return contador;
}

let array=["*",5,"*","*",0,"*"];

console.log(numAsteriscos(array));
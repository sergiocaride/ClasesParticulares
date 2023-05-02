function imprimirMatriz(array){
    array.forEach(element => {
        console.log(element);
        element.forEach(element2 => {
            console.log(element2);
        });
    });
}
let array=[[1,2,3],[6,7,9]];
imprimirMatriz(array);


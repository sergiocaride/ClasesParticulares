function pares(array) {
    let aux=[];
    array.forEach(element => {
        if (element%2==0) {
            aux.push(element);
        }
    });
    return aux;
}
let array=[4,6,7,9,10,3];
console.log(pares(array))
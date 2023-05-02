function minimo(array) {
    let menor=array[0];

    array.forEach(element => {
        if (element<menor) {
            menor=element;
        }
    });

    return menor;
}
var array=[4,2,-7,9,-6]
console.log(minimo(array));
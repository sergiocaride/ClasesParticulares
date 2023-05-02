function sumarArray(array) {
    let suma=0;
    array.forEach(element => {
        suma+=element;
    });

    return suma;
}
var array=[5,5,5,10];
console.log(sumarArray(array))
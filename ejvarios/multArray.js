function multArray(array) {
    let mult=1;
    array.forEach(element => {
        mult*=element;
    });

    return mult;
}
var array=[5,5,5,10];
console.log(multArray(array))
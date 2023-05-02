function  max(array) {
    let mayor=array[0];
    array.forEach(element => {
        if (element>mayor) {
            mayor=element;
        }
    });

    return mayor;
}

array=[-3,-6,-7,-9];
console.log(max(array));
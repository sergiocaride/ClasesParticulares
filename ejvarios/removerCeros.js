function removerCeros(array) {
    let arrayaux=[];
    array.forEach(element => {
        if (element!=0) {
            arrayaux.push(element);
        }
    });

    return arrayaux;
}

array=[1,0,5,0,3];

console.log(removerCeros(array));
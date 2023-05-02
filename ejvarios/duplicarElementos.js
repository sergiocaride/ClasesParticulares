function duplicar(array) {
    let aux=[];
        array.forEach(element => {
            let mult=1
            mult=element*2;
            aux.push(mult);
        });

    return aux;    
    
}
let array=[2,5,8,3,1];
console.log(duplicar(array));
function posPares(array) {
    let aux=[];
    array.forEach((element,index) => {
        if(element%2==0){
            aux.push(index);
        }
    });
    return aux;
}
let array=[2,5,6,4,8,10];
console.log(posPares(array));
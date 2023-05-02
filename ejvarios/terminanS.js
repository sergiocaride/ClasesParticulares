function terminanS(array) {
    let aux=[];

    array.forEach(element => {
        if((element.charAt((element.length)-1)=="s")||(element.charAt((element.length)-1)=="S")){
            aux.push(element);
        }
    });

    return aux;
}
let array=["olas","carro","balones"];
console.log(terminanS(array));
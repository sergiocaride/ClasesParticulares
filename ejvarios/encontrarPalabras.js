function empiezanConA(array) {
    let aux=[];

    array.forEach(element => {
        if((element.charAt(0)=="a")||(element.charAt(0)=="A")){
            aux.push(element);
        }
    });

    return aux;
}

let array=["academia","Acabar","perro","gato","amigo"];

console.log(empiezanConA(array));
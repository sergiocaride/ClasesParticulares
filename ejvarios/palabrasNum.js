function palabrasNum(array) {
    let aux=[];
    array.forEach(element => {
        if ((element=="Cero") || (element=="cero") ) {
            aux.push(0);
        }else if ((element=="Uno") || (element=="uno") ) {
            aux.push(1);
        }else if ((element=="Dos") || (element=="dos") ) {
            aux.push(2);
        }else if ((element=="Tres") || (element=="tres") ) {
            aux.push(3);
        }else if ((element=="Cuatro") || (element=="cuatro") ) {
            aux.push(4);
        }else if ((element=="Cinco") || (element=="cinco") ) {
            aux.push(5);
        }else if ((element=="Seis") || (element=="seis") ) {
            aux.push(6);
        }else if ((element=="Siete") || (element=="siete") ) {
            aux.push(7);
        }else if ((element=="Ocho") || (element=="ocho") ) {
            aux.push(8);
        }else if ((element=="Nueve") || (element=="nueve") ) {
            aux.push(9);
        }else{
            aux.push(-1);
        }
    });
    return aux;
}

let array=["cinco","seis","cuatro",6];

console.log(palabrasNum(array));

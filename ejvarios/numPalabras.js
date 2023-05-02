function numerosPalabras(array){
    let aux=[];
    array.forEach(element => {
        if (element==0) {
            aux.push("Cero");
        }else if (element==1) {
            aux.push("Uno");
        }else if (element==2) {
            aux.push("Dos");
        }else if (element==3) {
            aux.push("Tres");
        }else if (element==4) {
            aux.push("Cuatro");
        }else if (element==5) {
            aux.push("Cinco");
        }else if (element==6) {
            aux.push("Seis");
        }else if (element==7) {
            aux.push("Siete");
        }else if (element==8) {
            aux.push("Ocho");
        }else if (element==9) {
            aux.push("Nueve");
        }
    });
    return aux;
}

let array=[5,7,2,1,9,0,3];

console.log(numerosPalabras(array));
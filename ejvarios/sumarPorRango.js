posini=1;
posfin=3;
arrayNum=[5,5,5,5,5,5];

function sumarPorRango(arrayNum,posini,posfin) {
    let suma=0;
    let mayor=0;
    let menor=0;

    if (posini>posfin) {
        mayor=posini;
        menor=posfin;
    }else{
        menor=posini;
        mayor=posfin;
    }

    for (let i = 0; i <= arrayNum.length; i++) {
        if ((i>=menor)&&(i<=mayor)) {
            
                suma+=arrayNum[i];
            
        }
        
    }

    return suma;
}


console.log(sumarPorRango(arrayNum,posini,posfin));
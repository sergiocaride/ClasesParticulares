function distancia(str1, str2) {
    let cont=0;
    let mayor=0;
    let menor=0;
    if (str1.length>str2.length) {
        mayor=str1;
        menor=str2;
    }else{
        mayor=str2;
        menor=str1;
    }


    for (let i = 0; i < mayor.length; i++) {
       if( str1.charAt(i)!=str2.charAt(i)){
        cont++;
       };
        
    }
    return cont;
}

console.log(distancia("carro","corrertrt"));
function contarRango(num1,num2) {
    let mayor=0;
    let menor=0;
    let contador=0;
    if(num1>num2){
        mayor=num1;
        menor=num2
    }else{
        mayor=num2;
        menor=num1;
    }

    for (let i = menor; i < mayor; i++) {
        contador++;
    }

    return contador;
}

console.log(contarRango(11,8));
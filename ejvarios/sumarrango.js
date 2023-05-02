function sumarRango(num1,num2) {
    let mayor=0;
    let menor=0;
    let total=0;
    if(num1<num2){
        mayor=num2;
        menor=num1;
    }else{
        mayor=num1;
        menor=num2;
    }

    for (let i = menor+1; i < mayor; i++) {
        total+=i;
        
    }

    return total;
}

console.log(sumarRango(5,15));
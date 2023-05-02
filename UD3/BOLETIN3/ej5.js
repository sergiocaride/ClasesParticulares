function mayor(a,b) {
    if(a>b){
        return a;
    }else if(b>a){
        return b;
    }else{
        return "Son iguales";
    }
}

var array=[14,11,7];
function mayorArr(array) {
    let mayor=0;
    let menor=0;
    for (let pos = 0; pos < array.length; pos++) {
        
            if(array[pos]>mayor){
                mayor=array[pos];
                
            }else{
                menor=array[pos];
            }
        }
        
        return "El mayor es: "+mayor+" y el menor es: "+menor;
        
    }


function posMayor(array){
    let mayor=array[0];
    let pos=0;
    for (let i = 1; i < array.length; i++) {
        if(array[i]>mayor){
            pos=i;
            mayor=array[i];
        }        
    }
    return pos;
    
}    

function fibonacci(num){
   
    var salida="";
    var e1=0;
    var e2=1;
    var e3=e1+e2;

    while (e3<num) {
        e3=e1+e2;
        e1=e2;
        e2=e3;
        if(e3==num){
            salida="Es un elemento de fibonacci";
        }
    }
    alert(e3);
    return salida;
} 

alert(fibonacci(611));
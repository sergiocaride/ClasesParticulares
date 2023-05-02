var entrada=prompt("Escribe un numero");
numero=parseInt(entrada);

function fibonacci(num){
    let mensaje="false";
    const fib=[0,1];
    for (let i = 2; i < num+2; i++) {
        fib[i]=fib[i-1]+fib[i-2];
        
    }
    return fib.indexOf(num);
    }
    

alert(fibonacci(numero));
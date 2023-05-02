entrada=prompt("Escribe un numero");
numero=parseInt(entrada);
function fibonacci(num){
    const fib=[0,1];
    let numant=0;
    let numpost=0;

    for (let i = 2; i < num+2; i++) {
        fib[i]=fib[i-1]+fib[i-2];
        if(i==num+1){
            return fib[i-2]+" "+fib[i-1]+" "+fib[i];
        }
    }
   
    
}


alert(fibonacci(numero));
var primo=true;

var numero=prompt("Escribe un numero:");

for (let i = 2; i <= numero/2; i++) {
   if (numero%i==0) {
    primo=false
   }
    
}

alert(primo);
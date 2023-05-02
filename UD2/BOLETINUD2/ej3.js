var mensaje="La media de los 10 primeros numeros naturales es: ";
var cont=0;
var suma=0;
var media=0;
for (let i = 1; i <= 10; i++) {
    suma+=i; 
     cont++;
 }
 media=suma/cont;
 alert(mensaje+(media));
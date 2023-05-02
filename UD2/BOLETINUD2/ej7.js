var numero=prompt("Escribe un numero");
var mensaje1="Los primeros numeros naturales son: ";
var mensaje2="La suma de los primeros numeros naturales es: ";
var mensaje3="La media de los primeros numeros naturales es: ";
var suma=0;
var media=0;

for (let i = 1; i <= numero; i++) {
    mensaje1+=i;
    suma+=i;
    media=suma/numero;
    
}
 alert(mensaje1+"\n"+mensaje2+suma+"\n"+mensaje3+media);
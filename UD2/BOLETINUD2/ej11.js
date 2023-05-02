var numero= prompt("Escribe un numero");
var suma=0;

var mensaje="La media de los 10 primeros numeros naturales es: ";

for (let i = 0; i <= numero; i++) {
    suma+=i;
    
    
}
var media=suma/numero;
alert(mensaje+media);
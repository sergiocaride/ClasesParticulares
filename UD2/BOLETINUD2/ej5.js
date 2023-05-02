var numero=prompt("Escribe un numero");
var mensaje="La suma de los primeros numeros naturales es: ";
var suma=0;

for (let i = 0; i <= numero; i++) {
    suma+=i;
    
}

alert(mensaje+suma);
var entrada=0;
var numero=0;
var suma=0;
var cont=0;
var mensaje="Los numeros introducidos son:\n"
while(entrada!="*"){
    entrada=prompt("Escribe un numero");
    if(entrada!="*"){
        numero=parseInt(entrada);
        suma+=numero;
        cont++;
        mensaje+=entrada+"\n";
    }
}

media=suma/cont;
alert("La media es: "+media+"\n"+mensaje);
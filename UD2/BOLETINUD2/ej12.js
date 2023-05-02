var entrada;
var suma=0;
var cont=0;
var media=0;
while(entrada!="*"){
    entrada=prompt("Escribe un numero");
    if(entrada!="*"){
    numero=parseInt(entrada);
    suma+=numero;
    cont++;
    }
}
media=suma/cont;
alert(media);

var numero=0;
var mensaje="";
var pares=0;
var impares=0;
var contpar=0;
var contimpar=0;
var entrada="";
var cont=0;
var suma=0;

while(entrada!="*"){
 entrada=prompt("Escribe un numero por teclado");
    if(entrada!="*"){
        numero=parseInt(entrada);
        if(numero%2==0){
           pares=pares+numero;
           suma=suma+numero;
           contpar++;
           
       }else{
           impares=impares+numero;
           suma=suma+numero;
           contimpar++;
           
       }
       cont++;
    }
 
}
var mediapares=pares/contpar;
var mediaimpares=impares/contimpar;
var media=suma/cont;
var mayor=0;

var mayor=Math.max(mediapares,mediaimpares,media);
mensaje="Las medias halladas son: \nDe todos los numeros: "+media+"\nDe los pares: "+mediapares+"\nLa media de los impares es: "+mediaimpares+"\n\nLa media mayor de todas es: "+mayor;
alert(mensaje);
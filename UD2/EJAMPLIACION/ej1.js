var numero=0;
var mensaje="";
var pares=0;
var impares=0;
var contpar=0;
var contimpar=0;
var entrada="";
while(entrada!="*"){
 entrada=prompt("Escribe un numero por teclado");
    if(entrada!="*"){
        numero=parseInt(entrada);
        if(numero%2==0){
           pares=pares+numero;
           contpar++;
           
       }else{
           impares=impares+numero;
           contimpar++;
           
       }
    }
 
}
var mediapares=pares/contpar;
var mediaimpares=impares/contimpar;

mensaje="La media de los pares es: "+mediapares+"\nLa media de los impares es: "+mediaimpares;
alert(mensaje);
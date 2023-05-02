var mensaje="";
var entrada="";
var suma=0;
while(entrada!="*"){
 entrada=prompt("Escribe un numero por teclado");
    if(entrada!="*"){
        numero=parseInt(entrada);
        suma=suma+numero;
    }
 
}
if(suma%3==0){
    mensaje="El numero formado por los digitos introducidos es divisible por 3";
}else{
    mensaje="El numero formado por los digitos introducidos no es divisible por 3";

}


alert(mensaje);
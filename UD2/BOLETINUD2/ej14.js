var entrada1;
var entrada2;
var mensaje="Lista de ciudades y temperaturas:\n"
var temperaturamedia=0;
var contador;
var numero=0;

while(entrada1!="*"){
    entrada1=prompt("Escribe el nombre de una ciudad");
    if(entrada1!="*"){
    mensaje+=entrada1+": ";
    for (let i = 1; i <= 3; i++) {
        entrada2=prompt("Escribe la temperatura:");
        if(i==3){
            mensaje+=entrada2+"\n";
        }else{
        numero=parseInt(entrada2);
        temperaturamedia+=numero;
        mensaje+=entrada2+" ";
        
        }
    }
}
}

alert(mensaje+"Temperaturamedia: "+temperaturamedia);
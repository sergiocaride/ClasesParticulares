var deposito=50000;
var precio=1.24;
var litros=0;
var cont_coches=0;
var pagototal=0;
var gastomedio=0;
var entrada=0;
var porcentaje=0;

while(deposito>5000 && entrada!="*" ){
    entrada=prompt("Introduzca la cantidad de dinero a repostar");
    if(entrada!="*"){
        pago=parseInt(entrada);
        litros=parseInt(pago/1.24);
        if ((deposito-litros)<5000) {
            sobrante=5000-(deposito-litros);
            repostado=parseInt((litros-sobrante)*1.24);
            deposito=deposito-(litros-sobrante);
            cont_coches++;
            alert("NO es posible efectuar el repostaje completo, solo se ha repostado: "+repostado+" euros");
        }else{
        deposito=deposito-litros;
        cont_coches++;
        alert(deposito);
        }
        pagototal=pagototal+pago;
    }
    deposito=parseInt(deposito);
    alert(deposito);

}
gastomedio=pagototal/cont_coches;
alert("Han repostado: "+cont_coches+"\nQuedan: "+deposito+" litros\nEl gasto medio por coche es: "+gastomedio);


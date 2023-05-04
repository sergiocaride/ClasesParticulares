setInterval(() =>{
    var reloj=document.getElementsByClassName("reloj")[0];
    var tiempoActual=new Date();
    var hora=tiempoActual.getHours();
    var minuto=tiempoActual.getMinutes();
    var segundo=tiempoActual.getSeconds();
    if(hora<10){
        hora=`0${hora}`;
    }
    if(minuto<10){
        minuto=`0${minuto}`;
    }
    if(segundo<10){
        segundo=`0${segundo}`;
    }
    reloj.innerHTML=`${hora}:${minuto}:${segundo}`;
    
},1000)
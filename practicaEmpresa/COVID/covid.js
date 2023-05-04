window.onload=iniciar;

function iniciar() {
    var boton=document.getElementById("btnCargar");
    boton.addEventListener("click",clickCargar);

    

}

async function clickCargar() {
    let pais = document.getElementById("selectPais").value;
    let fecha= document.getElementById("inputFecha").value;
    let json=await cargarUrl('https://api.covidtracking.com/v1/states/current.json');
    console.log(json);
    let estadisticas= json;
    console.log(estadisticas);
if(pais=="la" && fecha==estadisticas[20].date){
    document.getElementById("positivos").innerHTML= estadisticas[20].positive;
    document.getElementById("probables").innerHTML= estadisticas[20].probableCases;
    document.getElementById("negativos").innerHTML= estadisticas[20].negative;
}else if(pais=="ny" && fecha==estadisticas[20].date){
    document.getElementById("positivos").innerHTML= estadisticas[37].positive;
    document.getElementById("probables").innerHTML= estadisticas[37].probableCases;
    document.getElementById("negativos").innerHTML= estadisticas[37].negative;
}

}

async function cargarUrl(url){
  let response= await fetch(url);
  return response.json();
}
var filas=6;
var columnas=5;
var contadorFila=0;
var contadorColumna=0;
var listaPalabras=["SERGI","CARLO","JOSES","MARIA"];
var palabra= listaPalabras[Math.floor(Math.random()*listaPalabras.length)];
var intentos=6;

function tablero() {

    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            let cuadrado=document.createElement("div");
            cuadrado.id=i.toString()+":"+j.toString();
            cuadrado.classList.add("cuadrado");
            document.getElementById("tablero").appendChild(cuadrado);
        }
    }
}
var teclas = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ", "DEL", "Z", "X", "C", "V", "B", "N", "M", "ENTER"];

function teclado() {
    teclas.forEach(tecla => {
        let cuadrado=document.createElement("span");
        cuadrado.id=tecla.toString();
        cuadrado.classList.add(tecla=="ENTER" ? "teclaEnter" : "tecla");
        cuadrado.innerText=tecla;
        cuadrado.onclick=function(){
            clickTecla(this);
        }

        document.getElementById("teclado").appendChild(cuadrado);

    });
    }
function clickTecla(tecla){
    let cuadrado=document.getElementById(`${contadorFila}:${contadorColumna}`);
  if(tecla.innerText=="ENTER"){
    
    comprobar();
  }else if(tecla.innerText=="DEL"){
    if(contadorColumna>0){
    contadorColumna--;
    }
    cuadrado=document.getElementById(`${contadorFila}:${contadorColumna}`);
    cuadrado.innerText="";
    
  }else if(contadorColumna<=4){
  cuadrado.innerText=tecla.innerText
  contadorColumna++;

  }else{
  alert("Debes pulsar ENTER.")

  }
}

function comprobar() {
    if(contadorColumna==5){
        let palabraIntroducida="";
        for (let i = 0; i < 5; i++) {
            palabraIntroducida+=document.getElementById(contadorFila.toString()+":"+i.toString()).innerText;
            
        }
        compararPalabras(palabraIntroducida, palabra);
        contadorColumna=0;
        contadorFila++;
        actualizarIntentos();
    }
}

function compararPalabras(palabraIntroducida,palabraFinal){
    if(palabraIntroducida===palabraFinal){
alert("Has ganado");    }
    else{

        for (let i = 0; i < palabraIntroducida.length; i++) {
          let estaLaLetra=contieneLetra(palabraIntroducida.charAt(i),i)  ;
          //Para pintar la tecla que tenga el valor de charAt(i)
          let tecla=document.getElementById(palabraIntroducida.charAt(i));
          let cuadrado=document.getElementById(contadorFila.toString()+":"+i.toString());
            switch (estaLaLetra) {
                case 0:
                    cuadrado.style.backgroundColor="green";
                    tecla.style.backgroundColor="green";
                    break;
                case 1:
                    cuadrado.style.backgroundColor="yellow";
                    tecla.style.backgroundColor="yellow";
                    break;
                
                default:
                    cuadrado.style.backgroundColor="grey";
                    tecla.style.backgroundColor="grey";
                    break;
            }
            
        }
    }
}

function contieneLetra(letra, pos) {
    //Si esta en la misma posicion devolvemos 0
    if (letra.localeCompare(palabra.charAt(pos))==0) {
        return 0;
    }
    //Si esta en otra posicion devolvemos 1
    for (let i = 0; i < palabra.length; i++) {
        if (letra.localeCompare(palabra.charAt(i))==0) {
            return 1;
        }   
        
    }
    //Si no esta en ninguna posicion devolvemos -1
    return -1;
}

function actualizarIntentos() {
    let restantes=intentos-contadorFila;
    let intentosHtml=document.getElementById("intentos");
    intentosHtml.innerText=restantes;
    if(restantes==0){
        alert("Has perdido.");
    }

}

function iniciar() {
    tablero();
    teclado();
    actualizarIntentos();
}
window.onload=iniciar;
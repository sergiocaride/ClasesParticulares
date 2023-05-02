

function validarDni() {
    var respuesta=document.getElementById("respuesta");
    var dni=document.getElementById("dni");
    if(dni.value==""){
        respuesta.innerText="Dni mal";
    }else{
        respuesta.innerText="Todo correcto, maquina";
    }
}
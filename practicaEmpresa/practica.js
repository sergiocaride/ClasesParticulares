/*
---------------------1----------------------------
window.onload=iniciar;
var tareas=[];

function iniciar() {
    var btnAgregar =document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click",clickBtnAgregar);
}

function clickBtnAgregar() {
    var txtTarea=document.getElementById("txtTarea");
    var tarea= txtTarea.value;
    tareas.push(tarea);
    mostrarTareas();
}

function mostrarTareas() {
    var listado = document.getElementById("listado");
    var html="";
    tareas.forEach(tarea => {
        html+=tarea+ "<br/>";
    });
    listado.innerHTML= html;
}
---------------------2----------------------------
window.onload=iniciar;
var personas=[];
function iniciar() {
    var enviar=document.getElementById("enviar");
    enviar.addEventListener("click",clickenviar);
}

function clickenviar() {
    var nombre=document.getElementById("nombre").value;
    var apellido=document.getElementById("apellido").value;
    var email=document.getElementById("email").value;    
    
    var persona= {
        nombre:nombre,
        apellido:apellido,
        email:email
    }
    
    personas.push(persona);
    mostrarPersonas();
}

function mostrarPersonas() {
    var listado=document.getElementById("listado");
    var html="";
    personas.forEach(persona => {
        html+=persona.nombre+"<br/>"+persona.apellido+"<br/>"+persona.email+"<br/>"
    });
    listado.innerHTML=html;
}

---------------------3----------------------------
*/

window.onload=iniciar;

function iniciar() {
    var enviar=document.getElementById("enviar");
    enviar.addEventListener("click", clickEnviar);

    var borrar=document.getElementById("borrar");
    borrar.addEventListener("click", clickBorrar);

    mostrarLista();
}

function clickBorrar() {
    localStorage.clear();
}

function clickEnviar() {
    var txtTexto=document.getElementById("texto").value;
    var textos=[];
    if (localStorage.textos) {
        textos=JSON.parse(localStorage.textos);
    }
    
    textos.push(txtTexto);
    localStorage.textos=JSON.stringify(textos)
    mostrarLista();
}

function mostrarLista() {
    var listado=document.getElementById("listado");
    var textos=[];
    if (localStorage.textos) {
        textos=JSON.parse(localStorage.textos);
    }
    var html="";


    textos.forEach(texto => {
        html+=texto+"<br/>";
    });
    listado.innerHTML=html;
}


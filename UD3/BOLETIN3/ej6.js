//esto es un comentario
var Grupo = {
    nombre: "Grupo1",
    listaAlumnos: [ {
        nombre: "jose"
    }, {
        nombre: "juan"
    }],
    tutor:"carlos",
    delegado:"jose",
    subdelegado:"juan" 
}

function nombreGrupo(nombre) {
    Grupo.nombre=nombre;
}

function nombreTutor(nombre) {
    Grupo.tutor=nombre;
}

function nombreDelegado(nombre){
    Grupo.delegado=nombre;
}

function nombreSub(nombre){
    Grupo.subdelegado=nombre;
}

function añadirAlumno(nombre){
    Grupo.listaAlumnos.push(nombre);
}


function eliminarAlumno(nombre){
   // Grupo.listaAlumnos=Grupo.listaAlumnos.filter((elementolista) => elementolista !== nombre);
    /*Grupo.listaAlumnos.forEach(elementolista => {
        if (elementolista==nombre) {
            Grupo.listaAlumnos.splice(Grupo.listaAlumnos.indexOf(elementolista),1);
        }
        
    });*/
    let arrayaux=[]
    Grupo.listaAlumnos.forEach(elementolista => {
        if (elementolista.nombre!==nombre) {
            arrayaux.push(elementolista);
        }
        
    });
    Grupo.listaAlumnos=arrayaux;
}

function mostrarNombreGrupo(){
    return Grupo.nombre;
}

function mostrarNombreTutor(){
    return Grupo.tutor;
}
function mostrarNombreDelegado(){
    return Grupo.delegado;
}
function mostrarNombreSubdelegado(){
    return Grupo.subdelegado;
}
function mostrarLista(){
    let string="";
    Grupo.listaAlumnos.forEach(alumno => {
        string+=alumno.nombre+"\n";
        
    });
    return string;
}

nombreGrupo('GrupoTest');
nombreTutor('Daniel');
nombreDelegado('Paco');
nombreSub('Maria');

alert(mostrarNombreGrupo()+"\n"+mostrarNombreTutor()+"\n"+mostrarNombreDelegado()+"\n"+mostrarNombreSubdelegado()+"\n"+mostrarLista());
añadirAlumno({nombre:"Pepe"});
alert(mostrarLista());
eliminarAlumno("Pepe");
alert(mostrarLista());


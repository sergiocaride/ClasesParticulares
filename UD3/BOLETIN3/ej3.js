/*var profesores=["sergio1","sergio2","sergio3","sergio4","sergio5",
"sergio1","sergio6","sergio7","sergio2","sergio8"];

var modulos=["daw1","daw2","daw3","daw4","daw5","daw6","daw7","daw8","daw9","daw10"];

var matriculados=[5,3,8,6,4,5,6,7,2,3];


var entrada=prompt("Introduce el nombre del porfesor");
var salida="El nombre del profesor introducido es: "+entrada+"\n\n";
var posicion=profesores.indexOf(entrada);
var modulosImpartidos;
var nModulosImpartidos=0;
var nAlumnosMatriculados=0;
var nMayorMatricula=0;
var indiceMayor;

if(posicion!=-1){
    salida+=entrada+" es profesor de algun modulo \n";
    nModulosImpartidos=1;
    modulosImpartidos=modulos[posicion];
    nAlumnosMatriculados=matriculados[posicion];

    for (let siguiente = posicion+1; siguiente < profesores.length; siguiente++) {
        if (entrada==profesores[siguiente]) {
            nModulosImpartidos++;
            modulosImpartidos+=modulos[siguiente]+" - ";
            nAlumnosMatriculados+=matriculados[siguiente];
        }
        
    }
    salida+="Imparte en "+nModulosImpartidos+"\n";
    salida+="Los modulos son: "+modulosImpartidos+"\n";
    salida+="Numero de alumnos totales: "+nAlumnosMatriculados+"\n";
    salida+="La media de alumnos matriculados es: "+(nAlumnosMatriculados/nModulosImpartidos)+"\n";

}
else{
    salida+="El profesor: "+entrada+" no imparte ningun modulo";
}

alert(salida);

*/
function esProfesorDeModulo(profesorEntrada){
    return profesor.includes(profesorEntrada);
}
function contarModulosDeProfesor(profesorEntrada){
    return profesor.filter((nombre,index) => nombre === profesorEntrada).length;
}

function obtenerModulosDeProfesor(profesor){
    return modulo.filter((_,index)=> profesor[index]=== profesor);
}
function obtenerTotalAlumnosDeProfesor(profesor){
    return alumnos.filter((_,index)=> profesor[index]===profesor).reduce((total,num)=> total + num,0);
}
function obtenerMediaAlumnosPorModulo(profesor){
    let modulos = obtenerModulosDeProfesor(profesor);
    let totalAlumnos = obtenerTotalAlumnosDeProfesor(profesor);
    return totalAlumnos/modulos.length;
}
function obtenerModuloMayoralumnos(profesor){
let indexMaxalumnos = alumnos.indexOf(Math.max(...alumnos));
return modulo[indexMaxalumnos];
}


var profesor=["sergio1","sergio1","sergio2"];

var modulo=["fisica","mates","lengua"];

var alumnos=[5,10,20];


var entrada=prompt("Escribe el nombre del profesor");
var cont=0;
var modulosImpartidos=[];
var numeroAlumnos=0;
var mediaAlumnos=0;
var aux=0;
var mayor=0;
var profesorN="";
var moduloN=0;
for (let i = 0; i < profesor.length; i++) {
    if(profesor[i]==entrada){
        cont++;
        modulosImpartidos.push(modulo[i]);
        
        numeroAlumnos+=alumnos[i];
        if(cont>1){
        mediaAlumnos=numeroAlumnos/cont;
            for (let i = 0; i < alumnos.length; i++) {
                if (alumnos[i]>mayor) {
                    mayor=alumnos[i];
                    profesorN=profesor[i];
                    moduloN=modulo[i];
                        
                    }
                }
                    
                
                
            }
        }
        }

if(cont>0){
alert("Este profesor si que imparte un modulo");
alert("Imparte en "+cont+" modulos");
alert("Imparte los modulos de: "+modulosImpartidos+".");
alert("Tiene "+numeroAlumnos+" alumnos");
alert("Tiene una media de "+mediaAlumnos+" alumnos");
alert("El profesor con el modulo con mas alumnos es: "+profesorN+", el modulo es: "+moduloN);
}
else{
    alert("Este profesor no imparte nada");
}
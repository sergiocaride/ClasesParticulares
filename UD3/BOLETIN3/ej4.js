/*var alumnos={"1":"Sergio1","2":"Sergio2","3":"Sergio3","4":"Sergio4","5":"Sergio5",
"6":"Sergio6","7":"Sergio7","8":"Sergio8","9":"Sergio9","10":"Sergio10",
"11":"Sergio11","12":"Sergio12","13":"Sergio13","14":"Sergio14","15":"Sergio15"};

var modulos={"daw1":"jose1","daw2":"jose2","daw3":"jose3","daw4":"jose4","daw5":"jose5"};

var horario=[["daw1","daw2","daw4"],
                ["daw2","daw1","daw5"],
                ["daw3","daw1","daw4"],
                ["daw2","daw3","daw1"]];

var horarioAlumno={ "1":new Array("daw1","daw2","daw4"),
                    "2":new Array("daw2","daw1","daw5"),
                    "3":new Array("daw3","daw1","daw4"),
                    "4":new Array("daw2","daw1","daw5"),
                    "5":new Array("daw2","daw1","daw5"),
                    "6":new Array("daw2","daw3","daw1"),
                    "7":new Array("daw2","daw1","daw5"),
                    "8":new Array("daw2","daw1","daw5"),
                    "9":new Array("daw2","daw1","daw5"),
                    "10":new Array("daw2","daw1","daw5"),
                    "11":new Array("daw1","daw2","daw4"),
                    "12":new Array("daw2","daw1","daw5"),
                    "13":new Array("daw2","daw1","daw5"),
                    "14":new Array("daw1","daw2","daw4"),
                    "15":new Array("daw2","daw1","daw5")} ;

function estaMatriculado(alumno,modulo,array){
    return array[alumno].includes(modulo);
}           

function tieneClase(alumno,array){

}
                    
var entrada=prompt("Escribe el ID de usuario");
var salida="hola";
var nombre=alumnos[entrada];

if(entrada!=null){
    if(nombre==" "){
        salida="No has escrito ningun nombre";
    }
    else if(nombre==undefined){
        salida="El nombre no se encontro";
    }else{
        salida="El horario de: "+nombre+" es el siguiente:\n";
        salida+="Hora | LUNES | MARTES | MIERCOLES |\n";
        
        for (var hora = 0; hora < horario.length; hora++) {
            salida+="   "+(hora+1)+"ª    |";
            for (dia = 0; dia < horario[hora].length; dia++) {
                let modulo=horario[hora][dia];
                if(esnombre,modulo)){
                    salida+="   "+modulo+" ("+modulos[modulo]+")    |  ";
                    alert(salida);taMatriculado(horarioAlumno,
                }else{
                    salida+="----------";
                    alert(salida);
                }
            
                
            }
            salida+="\n";
            
        }
    }
}else{
    salida="Has cancelado el ejercicio.";
}

alert(salida);
*/

var alumnos={1:"sergio1",2:"sergio2",3:"sergio3",4:"sergio4"};
var modulos={"m1":"jose1","mo2":"jose2","m3":"jose3","m4":"jose4","m5":"jose5"};
//PRIMERA HORA SEGUNDA TERCERA...
var horarios=[["m1","m3","m5"],["m3","m5","m2"],["m2","m4","m1"],["m3","m1","m2"]];
var horarioAlumno={1:["m3","m1","m4"],
                    2:["m2","m1","m4"],
                    3:["m5","m2","m4"],
                    4:["m3","m5","m4"]};

var entrada=prompt("Escribe la cuenta de usuario");
var mensaje="";
var nombreA="";
if(alumnos[entrada]){
    nombreA=alumnos[entrada];
    horarioAlumno[entrada];
    mensajeBonito =" LUNES | MARTES | MIERCOLES\n";
    for (let i = 0; i < horarios.length; i++) {
        for (let j = 0; j < horarioAlumno[entrada].length; j++) {
            if(horarioAlumno[entrada].includes(horarios[i][j])){
                mensajeBonito+=horarios[i][j]+" | "
            }else{
                mensajeBonito+="NoClase | "
            }
        }
        mensajeBonito+="\n";
        
        
    }
    alert(mensajeBonito);
    
}else{
    alert("Este alumno no existe");
}
/*var nombres=["Sergio1","Sergio2","Sergio3","Sergio4","Sergio5",
"Sergio6","Sergio7","Sergio8","Sergio9","Sergio10",
"Sergio11","Sergio12","Sergio13","Sergio14","Sergio15",
"Sergio16","Sergio17","Sergio18","Sergio19","Sergio20"];

var edades=[1,54,3,4,54,6,7,23,44,10,
    90,52,13,65,15,16,14,18,19,20];



for (var i = 0; i < nombres.length-1; i++) {
    for (var j = i+1; j < nombres.length; j++) {
        if(edades[i]>edades[j]){
            let nombre=nombres[i];
            nombres[i]=nombres[j];
            nombres[j]=nombre;

            let edad=edades[i];
            edades[i]=edades[j];
            edades[j]=edad;
        }
        
    }
    
}
var salida=nombres+"\n"+edades;

alert(salida);
*/

var nombres=["sergio1","sergio2","sergio3","sergio4"];
var edades=[56,18,32,76];


for (let i = 0; i < edades.length; i++) {
    for (let j = 0; j < edades.length; j++) {   
        if(edades[i]>edades[j]){
            let aux=edades[i];
            edades[i]=edades[j];
            edades[j]=aux;
            let aux2=nombres[i];
            nombres[i]=nombres[j];
            nombres[j]=aux2;
        }
        
    }
    
}

alert(nombres+"\n"+edades);


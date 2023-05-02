//Ejercicio 9: Crear variables.
/*
var numero;
numero=7;

console.log(numero);

console.log(typeof(numero));

numero='7';

console.log(numero);

console.log(typeof(numero));

var x,y;

var a=1, b='javascript';

//Ejercicio 10: Declarar una funcion con function.

function sumar(a, b){
    var suma=a+b;
    return suma;
}

console.log(sumar(1,2));

//Ejercicio 11: Resolver ReferenceError.

function mostrarSaludo(){
    var mensaje= "Hola que tal";

    console.log(mensaje);
}

//console.log(mensaje); Aparece ReferenceError, porque "mensaje" esta definida solo dentro de la funcion.


//Ejercicio 12: Contexto funcional.

function funcion1(){
    var a=3;
    function funcion3(){
        var b=5;
        function funcion5(){
            console.log(a,b);
        }
    }
}

function funcion2(){
    var a= 4;

    function funcion4(){
        console.log(a);
    }
}

funcion1();

funcion2();


//Ejercicio 13: Crear constante con const.

var nombre= 'Sergio';
let idioma= 'javascript';
const PI= 3.1416;

nombre='Sergio Barja';
idioma='php';


const estudiante= {'id':6, nombre:'German Ortiz'};

console.log(estudiante);

estudiante.id=7;

console.log(estudiante);

estudiante= {'id':8,nombre:'Sergio RAMIREZ'};

console.log(estudiante);


//Ejercicio 14: Crear y usar literales.

let nombre= new String('Eduard Ortiz');

console.log(nombre);

let puntaje=1000;

let jugando= new Boolean(true);


//Ejercicio 15: Crear instancia con constructores.

let string=new String('Hola que tal');
let array=new Array(2,3,5,7,11);
let restar=new Function('a','b', 'return (a-b)');
persona=new Object();


//Ejercicio 16: Validar variable.

var a;
var b=11;

if(a===undefined){
    console.log('LA VARIABLE "A" AUN NO TINE UN VALOR ASIGNADO');
}

a=5;

if(a===undefined){
    console.log('LA VARIABLE "A" AUN NO TINE UN VALOR ASIGNADO');
}else{
    console.log('La variable "a" tiene un valor asignado');
}

if(b===undefined){
    console.log('LA VARIABLE "b" AUN NO TINE UN VALOR ASIGNADO');
}else{
    console.log('La variable "b" tiene un valor asignado');
}


//Ejercicio 17: Determinar si una variable ha sido declarada con 'TypeOf'.

let a;
let b=11;

console.log(typeof(a));
console.log(typeof(b));



//Ejercicio 18: Comprobar si una funcion retorna valor.

function funcion1(){
    return;
}

function funcion2(){
    const a= 3;
}

function funcion3(){
    return 2+2;
}

function funcion4(){
    return true;
}

function funcion5(){
    return {};
}

let f1=funcion1();
console.log("funcion1 retorna"+f1);

let f2=funcion2();
console.log("funcion1 retorna"+f2);

let f3=funcion3();
console.log("funcion1 retorna"+f3);

let f4=funcion4();
console.log("funcion1 retorna"+f4);

let f5=funcion5();
console.log("funcion1 retorna"+f5);

*/

//Ejercicio 19: Validar si una variable es null o undefined.


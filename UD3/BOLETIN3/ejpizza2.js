
   var base=['Normal','Fina','Roll'];
   var salsa=['Sin','Barbacoa','Tomate','Crema'];
   var queso=['Sin','Normal','Extra','Doble'];
   var tamaño=['Pequeña','Mediana','Grande','Familiar'];
   var oferta=['Sin Oferta','2x1','Bebida gratis','Alitas gratis','Helado gratis'];
   var ingredientes=['Jamon York','Bacon','Champiñones','Atun','Aceitunas'];

   var Pizza={
    base:"",
    salsa:"",
    queso:"",
    tamaño:"",
    oferta:"",
    nIngredientes:0,
    ingredientes:[]
   }

function añadirBase(n) {
    
    Pizza.base=n;

}
function añadirsalsa(n){
    Pizza.salsa=n;
}
function añadirqueso(n){
    Pizza.queso=n;
}
function añadirtamaño(n){
    Pizza.tamaño=n;
}
function añadiroferta(n){
    Pizza.oferta=n;
}
function añadirNumIng(n){
    Pizza.nIngredientes=n;
}

function añadirIngrediente(n){
    Pizza.ingredientes.push(n);
}

function eliminarIngrediente(n) {
    let arrayaux=[];
    Pizza.ingredientes.forEach(ingrediente =>{
        if (ingrediente.ingr !== n) {
            arrayaux.push(ingrediente);
            
        }
    })
    Pizza.ingredientes=arrayaux;
}

function mostrarBase(){
    return Pizza.base;
}
function mostrarSalsa(){
    return Pizza.salsa;
}
function mostrarQueso(){
    return Pizza.queso;}
function mostrarTamaño(){
    return Pizza.tamaño;}
function mostrarOferta(){
    return Pizza.oferta;}
function mostrarNIngreditentes(){
    return Pizza.nIngredientes;}
function mostrarLista(){
    let string="";
    Pizza.ingredientes.forEach(ingrediente =>{
    string+=ingrediente+", ";
    });
    return string;}

var entradaBase=prompt("Escoge la base, las opciones son: "+base);  
var entradaSalsa=prompt("Escoge la salsa, las opciones son: "+salsa);  
var entradaQueso=prompt("Escoge el queso, las opciones son: "+queso); 
var entradaTamaño=prompt("Escoge el tamaño, las opciones son: "+tamaño);     
var entradaOferta=prompt("Escoge la oferta, las opciones son: "+oferta); 
var entradaNingredientes=prompt("Escoge numero de ingredientes");
var entradaIngredientes=prompt("Escoge los ingredientes, las opciones son: "+ingredientes); 

añadirBase(entradaBase);
añadirsalsa(entradaSalsa);
añadirqueso(entradaQueso);
añadiroferta(entradaOferta);
añadirtamaño(entradaTamaño);
añadirNumIng(entradaNingredientes);
añadirIngrediente(entradaIngredientes);

alert(mostrarBase()+"\n"+mostrarSalsa()+'\n'+mostrarQueso()+'\n'+mostrarTamaño()+'\n'+mostrarOferta()+'\n'+mostrarNIngreditentes()+'\n'+mostrarLista());

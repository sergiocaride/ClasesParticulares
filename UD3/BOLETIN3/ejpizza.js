var Pizza= {
    base:'',
    salsa:'',
    queso:'',
    tamaño:'',
    oferta:'',
    nIngredientes:0,
    ingredientes:[
    ]
}

function añadirBase(n){
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

function añadirIngLista(n) {
    Pizza.ingredientes.push(...n);
}
function añadir1soloIng(n) {
    Pizza.ingredientes.push(n);
}

//Borrar lista
function borrarIngredientes(n) {
    let arrayaux=[];
    Pizza.ingredientes.forEach(ingrediente =>  {
        if(ingrediente.ingr !== n){
            arrayaux.push(ingrediente);
        }
    });
    Pizza.ingredientes=arrayaux;
}


//-----------------

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
    string+=ingrediente.ingr+", ";
   });
    return string;}

    añadirBase('pan');
    añadirsalsa('tomate');
    añadirqueso('Gouda');
    añadirtamaño('Grande');
    añadiroferta('10%');
    añadirNumIng(5);
    añadirIngLista([{ingr:'aceitunas'},{ingr:'anchoas'}]);
    añadir1soloIng({ingr:"champiñones"});
    alert(mostrarBase()+"\n"+mostrarSalsa()+'\n'+mostrarQueso()+'\n'+mostrarTamaño()+'\n'+mostrarOferta()+'\n'+mostrarNIngreditentes()+'\n'+mostrarLista());

    borrarIngredientes('aceitunas');
    alert(mostrarBase()+"\n"+mostrarSalsa()+'\n'+mostrarQueso()+'\n'+mostrarTamaño()+'\n'+mostrarOferta()+'\n'+mostrarNIngreditentes()+'\n'+mostrarLista());
var ejemplo="hola";
   alert(ejemplo);
   alert(...ejemplo);
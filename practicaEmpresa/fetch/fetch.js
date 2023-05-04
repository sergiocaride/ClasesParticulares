
function cargarJson(){
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(jsonCargado);
}


 function jsonCargado(json) {
    let spanNombrePost= document.getElementById("txtNombrePost");
    spanNombrePost.innerText=json.title;
    let spanCompleto=document.getElementById("txtCompleto");
    spanCompleto.innerText=json.completed ? "El texto esta completo" : "El texto esta incompleto";
    console.log(json);
 }   

 cargarJson();
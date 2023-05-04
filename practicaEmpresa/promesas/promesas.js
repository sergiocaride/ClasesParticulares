function cargarJson() {
    //fetch('https://jsonplaceholder.typicode.com/todos/1')
    //.then(response => response.json())
    // .then(jsonCargado)
    //.catch();
    let promesa2 = new Promise(function(resolve,reject){
        setTimeout(()=> reject(new Error("WHOOPS!")),1000);
    })
    /* Se o que devolves pode tardar "moito tempo"
    Si o que devolves se consume en outro sitio (Servicio/web/etc) 
    Se é importante avisar de que houbo un fallo para que o servicio que consume 
    non siga esperando
     */
    let suma = function (a,b){
        return a+b
    }
    let suma2 = (a,b)=>{
        return a+b;
    }
    
    function tailandia(){
        console.getUsaurio();
    }
    let promesa = new Promise(
        resolver => {
        setTimeout(() => {
            let json = {
                "userId": 1,
                "id": 1,
                "title": "delectus aut autem",
                "completed": false
            }
            resolver(json);
        }, 5000);
    }
    );
    promesa.then(json => {
        jsonCargado(json);
    })
}


function jsonCargado(json) {
    let spanNombrePost = document.getElementById("txtNombrePost");
    spanNombrePost.innerText = json.title;
    let spanCompleto = document.getElementById("txtCompleto");
    spanCompleto.innerText = json.completed ? "El texto esta completo" : "El texto esta incompleto";
    console.log(json);
}

cargarJson();
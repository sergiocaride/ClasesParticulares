var coleccionDiscos = {
    7853: {
        tituloAlbum:" Bee Gees Greatest",
        artista:"Bee Gees",
        canciones: ["Stayin' Alive"]
    },
    5439:{
        tituloAlbum:"ABBA Gold"
    }
}
//preguntar
function actualizarDiscos(discos, id, propiedad, valor) {
    if (valor === "") {
       delete discos[id][propiedad];
    }
    else if (propiedad==="canciones") {
        discos[id][propiedad]=discos[id][propiedad] || [];
        discos[id][propiedad].push(valor);
    }else{
        discos[id][propiedad]=valor;
    }
}

console.log(coleccionDiscos[5439].artista);
actualizarDiscos(coleccionDiscos, 5439, "artista", "ABBA");
console.log(coleccionDiscos[5439].artista);
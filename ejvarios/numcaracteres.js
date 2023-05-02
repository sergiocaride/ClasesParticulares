function numeroCaracteres(str,letra){
    let cont=0;
    str=str.toUpperCase();
    letra=letra.toUpperCase();
    for (let i = 0; i < str.length; i++) {
        if (letra==str.charAt(i)) {
            cont++;
        }        
    }
    return cont;
}

console.log(numeroCaracteres("Academia","a"));
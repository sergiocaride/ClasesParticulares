function numeroDeAes(str) {
   let cont=0;
    for (let i = 0; i <= str.length; i++) {
        if((str.charAt(i)=="A") || (str.charAt(i)=="a")){
            cont++;
        }      
    }

    return cont;
}

console.log(numeroDeAes("Academia"));
function transcribir(str) {
    str=str.toUpperCase();
    let cadena="";
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i)=="G") {
            cadena+="C";
        }else if (str.charAt(i)=="C") {
            cadena+="G";
        }else if (str.charAt(i)=="T") {
            cadena+="A";
        }else if (str.charAt(i)=="A") {
            cadena+="U";
        }   else{
            cadena+=str.charAt(i);
        }
    }
    return cadena;
}

console.log(transcribir("IIOECGTKWA"));
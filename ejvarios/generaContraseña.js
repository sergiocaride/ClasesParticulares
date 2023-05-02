function password(str) {
    let cadena="";
    str=str.toLowerCase();
   for (let i = 0; i <= str.length; i++) {
    if(str.charAt(i)=="a"){
        cadena+="4";
    }else if(str.charAt(i)=="e"){
        cadena+="3";
    }else if(str.charAt(i)=="i"){
        cadena+="1";
    }else if(str.charAt(i)=="o"){
        cadena+="0";
    }else{
        cadena+=str.charAt(i);
    }
    
    }    
    return cadena; 
   
}
   console.log(password("AcAdeMiA"));
    

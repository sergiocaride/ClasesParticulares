function imc(peso, altura){
    const bmi=peso/(altura*altura);
    if(bmi<18.5){
        return "Bajo de peso";
    }else if((bmi>18.5) && (bmi<24.9)){
        return "Normal";
    }else if((bmi>25) && (bmi<29.9)){
        return "Sobrepeso";
    }else{
        return "Obeso";
    }
}

alert(imc(135,1.7));
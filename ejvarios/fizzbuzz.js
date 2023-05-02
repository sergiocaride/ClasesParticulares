function fizzbuzz(num) {
    const multres=num%3;
    const mulcinco=num%5;
    if((mulcinco==0) && (multres==0)){
        return "fizzbuzz";
    }else if(mulcinco==0){
        return "buzz";
    }else if(multres==0){
        return "fizz";
    }else{
        return num;
    }
}

console.log(fizzbuzz(8));
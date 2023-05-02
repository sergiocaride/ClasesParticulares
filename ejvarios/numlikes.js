function likes(num) {
    const mil=1000;
    const millon=1000000;
    if(num<mil){
        return num;
    }else if(num>millon){
        return (Math.floor(num))/millon+"M";
    }else {
        return (Math.floor(num))/mil+"K";
    }
        
    }

    console.log(likes(34000000));

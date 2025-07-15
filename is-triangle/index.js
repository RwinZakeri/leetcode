const isTriangle = (a , b , c) => {
    if(a + b > c || b + c > a || a + c > b){
        return "Yes"
    }else{
        return "No"
    }
}
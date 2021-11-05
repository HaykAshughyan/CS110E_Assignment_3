function inverse(number){
    for(let i = 0; i <= number.length - 1; i++){
        if(number[i] === 0){
            number[i] = 1
        }else 
        number[i] = 0
    }
    return number.join('');
}console.log(inverse([0,1,1,0,1]));
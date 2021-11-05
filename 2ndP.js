function prime(number){
    if (number === 2){
        return true;
    }
    for(let i = 2; i <= Math.sqrt(number); i++){
        if(number % i === 0){
            return false;
        }
    }
    return true;
}
let arr = [];

function findPrimes(num1,num2){
    for (let i = num1; i <= num2; i++){
        if (prime(i)){
            arr.push(i)
        }
    }
    return arr;
}
console.log(findPrimes(17,26));
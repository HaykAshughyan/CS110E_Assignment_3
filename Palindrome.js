function reverse(number){
    let rev = 0;
    let lDigit;

    while(number != 0){
        lDigit = number % 10;
        rev = rev * 10 + lDigit;
        number = Math.floor(number / 10);
    }
    return rev;
}

function polindrome(number){
    let rev = reverse(number);
    if (rev === number){
        return true;
    }else return false;
}
console.log(polindrome(12321))
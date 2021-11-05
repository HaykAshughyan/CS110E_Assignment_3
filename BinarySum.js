function binarySum(num1,num2){
    while(num1.length < num2.length){
        num1.unshift(0);
    }
    while(num2.length < num1.length){
        num2.unshift(0);
    }
    let carry = 0;
    const result = [];

    for (let i = num1.length - 1, j = num2.length - 1; i >= 0 || j >= 0; i--, j--){
        let n1 = num1[i];
        let n2 = num2[j];

        result.unshift((n1 + n2 + carry) % 2);

        if(n1 + n2 + carry > 1){
            carry = 1
        } else 
        carry = 0;

        }
        if(carry === 1){
            result.unshift(1);
        
    }
    return result.join('');

}
console.log(binarySum([0,1,0,0],[1]));
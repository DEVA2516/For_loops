let num = 12345;
let sum = 0;

sum = firstDigit(num)+lastDigit(num);

console.log("sum of first_last = "+sum);

function firstDigit(num){
    for(i=num;i>=10;i=parseInt(num))
        num = num/10;
    return i;
}


function lastDigit(num) {
    return num % 10;
}
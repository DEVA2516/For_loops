let num = 255;

console.log("sum of digits = ",sumOfDigits(num));

function sumOfDigits(num){
    let sum = 0;
    for(i=num;i>0;i=parseInt(num)){
        let rem = i % 10;
        sum += rem;
        num /= 10;
    }
    return sum;
}
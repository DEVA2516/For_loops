let num = 3245314;
let count = num.toString().length - 1;
let sum = 0;
let rem = 0;
for( let i= num ;i > 0; i = parseInt(num /= 10) ){
    rem = i % 10;
    //console.log(rem);
    sum += rem * (10 ** count);
    //console.log(sum);
    count --;
}
console.log(sum);
let num = 13;
let b = 1;
let sum = 0;
for(i = num ; i != 0; i = parseInt(num)){
    let rem = i % 2;
    num = num /2;
    sum  += rem * b;
    b *= 10;

}

console.log(sum);
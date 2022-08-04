let oct = 9;
let dec= 0,bin = 0;
let j = 0;

for (let i = oct; i > 0; i = parseInt(oct)){
    let rem = i % 10;
    dec += rem * Math.pow(8,j++);
    oct /= 10;
}

console.log(dec);
j = 1;

for (let i = dec ; i > 0; i = parseInt(dec)){
    let rem = i % 2;
    bin += rem * j;
    j *= 10;
    dec /= 2;
}

console.log(bin);

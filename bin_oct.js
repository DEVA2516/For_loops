let bin =10010111;
let dec = 0;
let j = 0;

for(let i=bin;i>0;i=parseInt(bin)){
    let rem = i % 10;
    dec += rem * Math.pow(2,j++);
    bin /= 10;
}

console.log(dec);
let oct = 0;
let k = 1;
for(let i=dec;i>0;i=parseInt(dec)){
    let rem = i % 8;
    oct += rem * k;
    k *= 10;
    dec /= 8;

}
console.log(oct);
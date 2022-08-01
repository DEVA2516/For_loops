let bin = 10111;
let dec = 0;
let j = 0;

for(let i=bin;i>0;i=parseInt(bin)){
    let rem = i % 10;
    dec += rem * Math.pow(2,j++);
    bin /= 10;
}

console.log(dec);
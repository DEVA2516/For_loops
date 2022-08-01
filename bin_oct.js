let bin = 10111;
let oct = 0;
let j = 0;

for(let i=bin;i>0;i=parseInt(bin)){
    let rem = i % 10;
    oct += rem * Math.pow(8,j++);
    bin /= 10;
}

console.log(oct);
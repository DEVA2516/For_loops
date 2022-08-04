let hex = "D0";
hex = hex.split("");

for (let i=0;i<hex.length;i++){
    if (hex[i] == 'A')
        hex[i] = '10';
    else if (hex[i] == 'B')
        hex[i] = '11';
    else if (hex[i] == 'c')
        hex[i] = '12';
    else if (hex[i] == 'D')
        hex[i] = '13';
    else if (hex[i] == 'E')
        hex[i] = '14';
    else if (hex[i] == 'F')
        hex[i] = '15';
    else
        continue;
}
//console.log(hex);

let j = 0;
let dec = 0;
for (let i =hex.length-1;i>=0;i--){
    dec += hex[i] * Math.pow(16,j++);
    //console.log(hex[i]);
}
//console.log(dec);

let oct = 0;
j = 1;

for(let i = dec; i > 0; i = parseInt(dec)){
    let rem = i % 8;
    oct += rem * j;
    j *= 10
    dec /= 8;
}

console.log(oct);
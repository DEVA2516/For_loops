let hex = "1000";
hex = hex.split("");

//console.log(hex);
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
console.log(hex);

let j = 0;
let sum = 0;
for (let i =hex.length-1;i>=0;i--){
    sum += hex[i] * Math.pow(16,j++);
    //console.log(hex[i]);
}
console.log(sum);



//hex = parseInt(hex.toString().replace(/,/g,""));

// let dec = 0;
// let j = 0;
// for (let i = hex ;i > 0;i = parseInt(hex)) {
//     let rem = i % 10;
//     dec += rem * Math.pow(16,j++);
//     hex /= 10;

// }

// console.log(dec);
is = require("./isem.js");

let s_num = 1;
let n_times =8;
let diff = 5;
let sum =0,sumseries =s_num;

for(let i=1;i<n_times;i++){
    s_num += diff;
    sumseries += s_num;
    console.log(s_num);
} 

console.log(sumseries);
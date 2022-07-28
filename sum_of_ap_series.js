is = require("./isem.js");

let s_num = prompt("",2);
let n_times =prompt("",8);
let diff = prompt("",5);
let sum =0,sumseries = parseInt(s_num);

for(let i=1;i<n_times;i++){
    s_num += diff;
    sumseries += s_num;
    console.log(s_num);
} 

console.log(sumseries);
is = require("./isem.js");

let s_num = parseInt(prompt("",2));
let n_times =parseInt(prompt("",8));
let diff = ParseInt(prompt("",5));

let sum =0,sumseries = 0;
sumseries =s_num;

for(let i=1;i<n_times;i++){
    s_num += diff;
    sumseries += s_num;
    console.log(s_num);
} 

console.log(sumseries);
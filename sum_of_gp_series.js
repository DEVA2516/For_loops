//is = require("./isem.js");

let s_num = parseInt(prompt(" ",3));
let n_times =parseInt(prompt(" ",5));
let ratio = parseInt(prompt("",2));

let sum =0,sumseries =0;
sumseries = s_num;

for(let i=1;i<n_times;i++){
    s_num *= ratio;
    sumseries += s_num;
    console.log(s_num);
} 

console.log(sumseries);
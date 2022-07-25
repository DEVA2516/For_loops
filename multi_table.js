is = require("./isem.js");

let mul = prompt("",5);
let num = prompt('',10);
let str = '';

if(num>0 && mul>0 && !is.isempty(mul) && !is.isempty(num)){
    for(let i = 1;i<=num;i++){
        str = '';
        for(let j = 1;j<=mul;j++){
            sum = i*j;
            str += j+"x"+ i +"="+ sum+" "; 
        }
        console.log(str);
    }
}

else 
    console.log("Invalid range ......check ...min and max...........");
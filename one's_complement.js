let num = "10111";
let c = [];
let k = 0,j = 0;

for(let i=0;i<num.length;i++)
    c[j++]= (num[i]=='1')?0:1;


console.log(c);
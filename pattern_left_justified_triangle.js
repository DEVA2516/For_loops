is = require("./isem.js");
let num = prompt("",5);
let str = '';

if(!is.isempty(num)){
    for(let i=num;i>0;i--){
        for(let j=i;j>0;j--)
            str += j+" ";
        console.log(str);
        str = '';
    }
}

else
    console.log("Invalid number.....try greater than zero....");
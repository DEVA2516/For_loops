is = require("./isem.js");
let num = 5;

if (!is.isempty(num)){
    let str ='';
    let l = 1;
    for(let i=1;i<=num;i++){

        for(let j=num-i;j>=0;j--)
            str += ' ';

        for(let k=1;k<=i;k++){
            str += l++ + " ";
        }
        console.log(str);
        str = '';
    }
}

else 
    console.log("Invalid number......try....greater than zero....");
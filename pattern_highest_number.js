is = require("./isem.js");
let num = prompt("",5);
let str = '';

if(!is.isempty(num)){

    for(let i = 1;i<=num;i++){
        str = '';
        for(let j =i;j<=num;j++){
            str += j + " ";
        //console.log(str);
        }
        console.log(str);
    }
}

else 
    console.log("Invalid number.......try greater than zero.......");
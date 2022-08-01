is =require("./isem.js");

let num1 = 0;
let num2 = 1;
let num3 = prompt("",10);
let str = '';

if(!is.isempty(num3)){
    
    str = num1 +" "+num2;

    for(let i = 2;i<num3;i++){

        let sum = num1 + num2;
        str += " "+ sum;

        num1 = num2;
        num2 = sum;
        }

    console.log(str);
}
else
    console.log("Invalid number......Try number greater than zero........");


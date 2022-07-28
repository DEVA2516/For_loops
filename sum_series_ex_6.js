is = require("./isem.js");

let x = prompt("",3);
let num = prompt("",5);

if(x>0 && num>0 && !is.isempty(x) && !is.isempty(num)){

    let sum = 1;

    for(i=1;i<=num;i++){
         sum += x ** (i/fact(i));
         //console.log(sum);
    }
    console.log(sum);

}
else
    console.log("Invlid range........check.....min.....max");


function fact(num){
    let ft=1;
    for(let i=1;i<=num;i++)
        ft = ft*i;
    return ft;
}
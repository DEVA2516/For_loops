is = require("./isem.js");

let x = prompt("",2);
let num = prompt("",5);

if(!is.isempty(x) && !is.isempty(num)){

    let sum = 0;
    let j=1;

    for(i=0;i<num;i++){
        if(i%2==0)
            sum += x ** j;
        else
            sum -= x ** j;
            //console.log(sum);

        j+=2;
    }
    console.log(sum);
}
else
    console.log("Invlid range........check.....min.....max");

is = require("./isem.js");

let arr_size = prompt();
let a =[];

for(let ip = 0;ip<arr_size;ip++){
    a[ip] = prompt()
    if(a[ip]==-1)
        break;
}

if(!is.isempty(a)){

    let min = a[0],max = a[0];
    let avg = 0,sum = 0;

    for(let i=0;i<a.length;i++){
        if(a[i]<min)
            min = a[i];
    }
    console.log ("min = "+ min);

    for(let i=0;i<a.length;i++){
        if(a[i]>max)
            max= a[i];
    }
    console.log ("max = "+ max);

    for(let i=0;i<a.length;i++){
        sum += a[i];
    }
    avg = sum/a.length;

    console.log ("avg = "+ avg);
}
else 
    console.log("array is empty........");
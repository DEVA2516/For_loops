is = require("./isem.js");

const array = [1,1,1,1];

let b = prompt("",1);

if(!is.isempty(b) && !is.isempty(array)){

    let count = 0;
    for(let i=0;i<array.length;i++){
        if(array[i]!=b){
            console.log("All elements are not same........");
            break;
        }
        count++;
    }

    if(count == array.length)
        console.log("All elements are same....");
}
else 
    alert("invalid element..........Try valid element greater than zero........!!!!");
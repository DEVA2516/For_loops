let num = prompt();
let str = ' ';

if((num>0)&&(!isempty(num))){
    for(let i=1;i<=num;i++){
     str += i+' ';
}
console.log(str);
}

else
    console.log("Invalid number......try number greater than Zero")

function isempty(value){
    return (value == ''||value==null||value ===undefined)?true:false;
}
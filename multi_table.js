let mul = prompt("",5);
let num = prompt("",10);
let str = '';

if(num>0 && mul>0 && !isempty(mul) && !isempty(num)){
    for(let i = 1;i<=num;i++){
        str = '';
        for(let j = 1;j<=mul;j++){
            sum = i*j;
            str += j+"x"+ i +"="+ sum+" "; 
        }
        console.log(str);
    }
}

function isempty(value){
    return (value == null||value === undefined||value=='')?true:false;
}

function isempty(value) {
    return (value==null||value == ' '||value.length <= 0||value === undefined)?true:false;
}


let min = prompt("",100);
let max = prompt("",200);
let str = '';
let sum = 0;
if((min>0)&&(min<max)&&(!isempty(min))&&(!isempty(max))){
    for(let num=min;num<=max;num++){
        if(num % 9 == 0){
            str += num + ' ';
            sum += num;
           }
        
    }
    console.log(str);
    console.log(sum);
}
else
    console.log("Invlid range........check.....min.....max");

function isempty(value){
    return (value == null||value === undefined||value=='')?true:false;
}
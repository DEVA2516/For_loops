let min = 1;
let max = prompt("enter upperlimit",25);
let str = '';

if((min>0)&&(min<max)&&(!isempty(min))&&(!isempty(max))){
    for(let num=min;num<=max;num++){
        if(num>=2){
            let flag = 1;
            for(j=2;j<num;j++){
                if(num%j==0){
                    str += num + ' ';
                    break;
                }
           }
        }
    }
    console.log(str);
}
else
    console.log("Invlid range........check.....min.....max");

function isempty(value){
    return (value == null||value === undefined||value=='')?true:false;
}
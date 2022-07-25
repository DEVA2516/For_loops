let min = prompt("min = ",);
let max = prompt("max = ",);
if((min>0)&&(min<max)&&(!isempty(min))&&(!isempty(max))){
    for(let num=min;num<=max;num++){
        let sum = 0;
        //console.log(num);
        for(let i = 1;i<num;i++){
            if(num % i == 0)
                sum += i;
        }
        if(sum == num)
            console.log(num);
    }
}
else 
    console.log("Invalid range ......check ...min and max...........");

function isempty(value){
    return (value == null || value == '' || value === undefined)?true:false;
}

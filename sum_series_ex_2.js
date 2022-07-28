let num = 5;

if((num>0)&&(!isempty(num))){
    let sum = 0;
    for(i=1;i<=num;i++){
        sum += (1/i)**i;
    }
console.log(sum);
}
else
    console.log("Invalid number..........");

function isempty(value) {
        return (value==null||value == ' '||value.length <= 0||value === undefined)?true:false;
    }
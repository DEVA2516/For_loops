let num = prompt("",5);

if((num>0)&&(!isempty(num))){
    let sum_series = 0;
    let sum = 0;
    for(i=0;i<num;i++){
        sum += (10**i);
        //console.log(sum);
        sum_series += sum;
    }
    console.log(sum_series);
}
else
    console.log("Invalid number..........");

function isempty(value) {
        return (value==null||value == ' '||value.length <= 0||value === undefined)?true:false;
    }
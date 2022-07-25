let num = prompt();

if((num>0)&&(!isempty(num))){
let odd = 1
let sum = 0;
for(i=0;i<num;i++){
    sum += odd;
    odd += 2;
}
console.log(sum);
}
else
    console.log("Invalid number..........");

function isempty(value) {
        return (value==null||value == ' '||value.length <= 0||value === undefined)?true:false;
    }
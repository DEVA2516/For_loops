let num = prompt();

if((num>0)&&(!isempty(num))){
    let even = 2;
    let sum = 0;
    for(let i=0;i<num;i++){
        sum += even;
        even += 2;
    }
    console.log(sum);
}
else
    console.log("Invalid number..........");

function isempty(value) {
        return (value==null||value == ' '||value.length <= 0||value === undefined)?true:false;
    }
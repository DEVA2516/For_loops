let num1 = prompt("number1",25);
let num2 = prompt('number2',15);
let min = 0;

if((num1>0)&&(num2>0)&&(!isempty(num1)&&(!isempty(num2)))){
    if(num1>num2)
        min = num2;
    else
        min = num1;

    for(let i=min;i>0;i--){
        if((num1%i==0)&&(num2%i==0)){
            console.log(i);
            break;
        }

    }
}
else
    console.log("Invalid number.......check.......num1 and num2 ");

function isempty(value){
    return (value == ''||value==null||value ===undefined)?true:false;
}
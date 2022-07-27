let num = prompt("",12345);

if( num>0 && !isempty(num)){
    let count = num.toString().length - 1;
    let sum = 0;
    let rem = 0;
    for( let i= num ;i > 0; i = parseInt(num /= 10) ){
        rem = i % 10;
    //console.log(rem);
        sum += rem * (10 ** count);
    //console.log(sum);
        count --;
    }
    console.log(sum);
}

else
    alert("Invalid number..........");

function isempty(value) {
        return (value==null||value == ' '||value.length <= 0||value === undefined)?true:false;
    }
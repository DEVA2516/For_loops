let num = 7;
let sum = 0;
let str = '';
for(let i=1;i<=7;i++){
    for(let j=1;j<=i;j++){
        sum += j;
        str += sum + " ";
    }
    sum = 0;
    console.log(str);
}
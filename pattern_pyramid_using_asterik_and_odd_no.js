let num = 5;
let str =' ';

for(let i=1;i<=num;i++){

    for(let j= num-i;j>=0;j--)
        str += ' ';
    
    for(let k=1;k<=2*i-1;k++)
        str += '*' + " ";
    
    console.log(str);
    str = '';
}
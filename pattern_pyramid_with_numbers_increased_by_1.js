let num = 5;
let str ='';
let l = 1;
for(let i=1;i<=num;i++){

    for(let j=num-i;j>=0;j--)
        str += ' ';

    for(let k=1;k<=i;k++){
        str += l++ + " ";
    }
    console.log(str);
    str = '';
}
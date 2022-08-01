let num = 5;
let str ='';

for(let i=0;i<num;i++){

    for(let j = 0;j<i+1;j++)
        str += ' ';

    for(let k=i;k<num;k++)
        str += "*"+"";

    console.log(str);
    str ='';
}
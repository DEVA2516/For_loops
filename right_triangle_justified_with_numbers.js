let num = 5;
let str = '';
let inc = 1;
for(let i=num;i>0;i--){

    for(let j=num-i;j>0;j--)
        str += ' ';
    
    for(let k =0;k<i;k++)
        str += inc++ + " ";

    console.log(str);
    str = '';   
    inc = 1;
}


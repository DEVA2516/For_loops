let num = 7;
let str ='';

for(i=1;i<=num;i++){
    
    for(j=i;j>0;j--)
    
        str += (j%2 == 0)?0:1;

    console.log(str);
    str ='';
}
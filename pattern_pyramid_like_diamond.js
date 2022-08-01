let num = 50;
let str ='';
let l = num * 2;

for(let i=1;i<=num;i++){

    for(let j= num-i;j>=0;j--)
        str += ' ';

    for(let k=1;k<=2*i-1;k++){
        str += '*' + "";
        //console.log(k);
    }

    console.log(str);
    str = '';
}

for(let i=num-1;i>=1;i--){

    for(let j=num-i;j>=0;j--)
        str += ' ';
    
    for(let k=1;k<=2*i-1;k++)
       str += '*'+""; 

    console.log(str);
    str = '';
}
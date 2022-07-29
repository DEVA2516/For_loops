let num = 5;
let str = '';
for(let i=num;i>0;i--){
    for(let j=i;j>0;j--)
        str += j+" ";
    console.log(str);
    str = '';
}
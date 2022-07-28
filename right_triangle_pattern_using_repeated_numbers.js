let num = 5;
let str = '';
let k = 1;
for(let i = 0;i<num;i++){
    str = '';
    for(let j =0;j<=i;j++){
        str += k+" ";
        //console.log(str);
    }
    console.log(str);
    k++;
}
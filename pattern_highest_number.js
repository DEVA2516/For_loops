let num = 5;
let str = '';

for(let i = 1;i<=num;i++){
    str = '';
    for(let j =i;j<=num;j++){
        str += j + " ";
        //console.log(str);
    }
    console.log(str);
}
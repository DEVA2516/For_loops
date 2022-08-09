let num = 5;
let str = '';

for (let i = 0; i < num; i++ ) {
    let k = i;
    let l = 0;
    
    for (let j = 0; j < num ; j++)
            str += (k>0)? k-- + ' ' : l++  + ' ';
    
    console.log(str);
    str = '';
}
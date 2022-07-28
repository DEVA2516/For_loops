let num = 5;
let str = '';

for(let i=1;i<=num;i++){

    for (let k=num-i;k>=0;k--){
            str += ' ';
    }

    for(let j=1;j<=i;j++){
            str += "*"+" ";                                               
    }
     console.log(str);
     str = '';
}


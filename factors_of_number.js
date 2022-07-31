let num = 63;
let str = '';

for(i=1;i<=num;i++){
    if(num%i==0)
        str += i + " ";
}

console.log(str);
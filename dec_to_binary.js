let num = 13;

for(i = num ; i > 0; i = parseInt(num)){
    let rem = i % 10;
    sum  += rem % 2;
    num /= 2 

}
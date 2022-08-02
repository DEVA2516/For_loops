let dec = 19;
let octal = 0;
let j = 1;
for(i=dec;i>0;i=parseInt(dec)){
    octal += (i % 8)*j;
    j *= 10;
    dec /= 8;
}
console.log(octal);
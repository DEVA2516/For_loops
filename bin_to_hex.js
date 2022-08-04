let bin = 101010;
let dec = 0;
let hex = '';

dec = bin_to_dec(bin);
console.log(dec);

for (let i = dec; i > 0; i = parseInt(dec)){
    let rem = i % 16 ;
    hex += (rem >=10 && rem <= 15)? rem_10_to_15(rem) : rem;
    dec /= 16;
}
  console.log(hex.split("").reverse().join(""));


function rem_10_to_15(rem){
    if (rem == 10)
        return "A";
    else if (rem == 11)
        return "B";
    else if (rem == 12)
        return "c";
    else if (rem == 13)
        return "D";
    else if (rem == 14)
        return "E";
    else if (rem == 15)
        return "F";
}


function bin_to_dec(bin) {
        let j = 0;
        for (let i = bin; i > 0; i = parseInt(bin)) {
            let rem = i % 10;
            dec += rem * Math.pow(2, j++);
            bin /= 10;
        }
        return dec;
    }



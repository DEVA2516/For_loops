let oct = 1000;
let hex = "";
let dec = 0;

dec = oct_to_dec(oct);

for (let i = dec; i > 0; i = parseInt(dec)) {
    let rem = parseInt(dec % 16);
    hex += (rem >= 10 && rem <= 15) ? rem_10_to_15(rem) : rem;
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


function oct_to_dec(oct){
    let j = 0;
    for (let i = oct ; i > 0; i = parseInt(oct)){
        let rem = i % 10;
        dec += rem * Math.pow(8,j++);
        oct /= 10; 
    }
    return dec;
    
}
let dec = 100;
let hex = '';
let j = 1;
for(let i=dec;i>0;i=parseInt(dec)){
    let rem = parseInt(dec % 16);
    let letter = hex_letter(rem);
    //console.log(rem);
    hex += (rem >=10 && rem<=15)? letter: rem;
    //hex += rem * j;
    //j *= 10;
    dec /= 16;
}

console.log(hex_rev(hex));

function hex_letter(rem){
    if(rem >= 10 && rem <= 15){
        if(rem == 10)
            return "A";
        else if (rem == 11)
            return "B";
        else if(rem == 12)
            return "C";
        else if(rem == 13)
            return "D";
        else if(rem == 14)
            return "E";
        else if(rem == 15)
            return "F";
    }
}

function hex_rev(hex){
    hex = hex.split("");
    for(let i =hex.length-1,j=0;j<i;j++,i--){
        let temp = hex[j];
        hex[j] = hex[i];
        hex[i] = temp;

    }
    let hex_s = hex.toString(); 
    hex_s = hex_s.replace(/,/g,"");
    return hex_s;

    
}
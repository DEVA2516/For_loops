let num = 12223456;
num = num.toString();
let count = 0;
let digit = 9;
for(let i=0;i<=digit;i++){
    for(let j=0;j<num.length;j++){
        if(i==num[j])
            count++;

    }
    console.log("The frequency of "+ i + " = "+ count);
    count = 0;

}
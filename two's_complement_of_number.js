let num = "0011";
let c = [];
let carry = 1,two = [];
let k = 0;

 c = onesComplement(num);
 console.log(c);

for(let i=c.length-1;i>=0;i--){
    //console.log(c[i]);

    if (c[i] == 1 && carry == 1){
        two[i] = 0;
        carry = 1;
    }
    else if(c[i]==0 && carry == 1){
        two[i] = 1;
        carry = 0;
    }
    else
        two[i] = c[i];

        //console.log(two[i]);
}

console.log("two complements = "+two);



function onesComplement(num){
    let j = 0;

    for(let i=0;i<num.length;i++)
        c[j++] = (num[i]==1)?0:1;
   // console.log("one's complements = "+ c);
    return c;
}
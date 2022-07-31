let num = 3456;
let product =1,rem=0;

for(let i=num;i>0;i=parseInt(num)){
    rem = parseInt(i % 10);
    //console.log(rem);
    product *= rem;
    //console.log(sum)
    num /=10;
}

console.log("product of digits = "+ product);
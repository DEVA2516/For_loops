let oct = 10 ;
let dec = 0;
let j = 0;

for (let i = oct ; i > 0; i = parseInt(oct)){
    let rem = i % 10;
    dec += rem * Math.pow(8,j++);
    oct /= 10; 
}
console.log(dec);

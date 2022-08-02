let num = 10;
let diff=1.1;
let sum = 0.1;
let sumseries = 0;

for(let i=0;i<num;i++){
    sum += diff;
    console.log(parseFloat(sum).toFixed(2));
    sumseries += sum; 
}
console.log("....................");

console.log("sum of series = "+ sumseries);
//pa
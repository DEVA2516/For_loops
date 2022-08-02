let num_times = 15;
let base = 9;
let sum = 0;
let temp = 0;

for(let i=1;i<=num_times;i++){
    let k = 0;
    for(let j = i;j>0;j=parseInt(temp)){
        temp = i;
        let rem = j % 10;
        sum += rem *(base ** k);
        k++;
        temp /= 10;
    }
    console.log(sum);
    sum = 0;
    temp = 0

}
let num_times = 15;
let base = 9, sum = 0;

for (let i = 1; i <= num_times; i++) {
    let k = 0;
    for (let j = i; j > 0; j = parseInt(j)) {
        let rem = j % 10;
        sum += rem * (base ** k);
        j /= 10;
        k++;
    }
    console.log(sum);
    sum = 0;

}

// for (let i=100;i>0;i=parseInt(temp)){
//     temp = i;
//     let rem = temp % 10;
//     sum += rem * (base ** k);
//     console.log(sum);
//     k++;
//     temp /= 10;
// }
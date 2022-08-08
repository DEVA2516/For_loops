//  12. Write a program to calculate the sum of the series (1*1) + (2*2) + (3*3) +
// (4*4) + (5*5) + ... + (n*n).

let num = prompt("",5);

if (!isempty(num)) {
    let sum = 0;
    for (i = 1; i <= num; i++) {
        sum += (i * i);
    }
    console.log(sum);
}
else
    console.log("Invalid number..........");

function isempty(value) {
    return (value == null || value < 0 || value == ' ' || value.length <= 0 || value === undefined) ? true : false;
}
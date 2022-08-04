// 2. Write a program to find the sum of first 10 natural numbers.

let num = prompt();
if ((num > 0) && (!isempty(num))) {
    let sum = 0;
    for (i = 1; i <= num; i++)
        sum += i;
    console.log(sum);
}
else
    console.log("Invalid number try number greater than zero........");

function isempty(value) {
    return (value == null || value == '', value === undefined) ? true : false;
}
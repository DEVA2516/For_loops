// 14. Write a program to find the sum of series 1 - X^2/2! + X^4/4!-.... upto nth term.

let num = prompt("", 5);

if ((num > 0) && (!isempty(num))) {
    let sum = 0;
    for (i = 1; i <= num; i++) {
        sum += (10 ** i) - 1;
    }
    console.log(sum);
}
else
    console.log("Invalid number..........");

function isempty(value) {
    return (value == null || value == ' ' || value.length <= 0 || value === undefined) ? true : false;
}
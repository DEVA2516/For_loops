// 10. Write a program to find the sum of digits of a given number.

let num = prompt();

if (num > 0 && (!isempty(num))) {
    let sum = 0;
    for (i = num; i > 0; i = parseInt(num)) {
        let rem = i % 10
        sum = sum + rem;
        num /= 10;
        //console.log(sum);
    }
    console.log("sum = " + sum);
}
else
    alert("Invlid digit.........Try num greater than zero.......");

function isempty(value) {
    return (value == null || value === undefined || value == '') ? true : false;
}
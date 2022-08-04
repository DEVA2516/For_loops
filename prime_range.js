// 6. Write a program to find prime number within a range.

let min = prompt("Min = ", 1);
let max = prompt("Max = ", 100);
let str = '';
let count = 0;
if ((min > 0) && (min < max) && (!isempty(min)) && (!isempty(max))) {
    for (let num = min; num <= max; num++) {
        if (num >= 2) {
            let flag = 1;
            for (j = 2; j < num; j++) {
                if (num % j == 0) {
                    flag = 0;
                    break;
                }
                flag = 1;
            }

            if (flag == 1) {
                count++;
                str += num + ' ';
            }
        }
    }
    console.log(str);
    console.log(count);
}
else
    alert("Invlid range........check.....min.....max");

function isempty(value) {
    return (value == null || value === undefined || value == '') ? true : false;
}
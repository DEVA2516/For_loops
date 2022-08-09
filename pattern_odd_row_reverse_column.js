// 55. Write a program to display such a pattern for n number of rows using
// number. Each row will contain odd numbers of number. The first and last number
// of each row will be 1 and middle c

let num = 7;
let str = '';

for (let i = num; i > 0; i--) {

    let k = 0;

    for (l = num - i; l >= 0; l--) {
        str += ' ';
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        if (j <= i) {
            str += ++k + ' ';
        }
        else
            str += --k + ' ';
    }
    console.log(str);
    str = ' ';
}
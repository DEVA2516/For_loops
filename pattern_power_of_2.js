// 47. Write a program to display such a pattern for n number of rows using
// number.Each row will contain odd numbers of number.The first and last number
// of each row will be 1 and middle column will be the row number.

let num = 5;
let str = '';

for (let i = 1; i <= num; i++) {
    let k = 0;
    for (let j = 1; j <= 2 * i - 1; j++) {
        if (j < i) 
            str += 2 ** k++ + ' ';
        else
            str += 2 ** k-- + ' ';
    }
    console.log(str);
    str = '';
}
// 47. Write a program to display such a pattern for n number of rows using
// number.Each row will contain odd numbers of number.The first and last number
// of each row will be 1 and middle column will be the row number.

let num = 5;
let str = ' ';

for (let i = 1; i <= num; i++) {
   let k = i;
   for (l = num - i; l >= 0;l--){
    str += ' ';
   }
    for (let j = 1; j <= 2 * i - 1; j++) {
        if (j < i) {
            str += k++ + ' ';
        }
        else
            str += k-- + ' ';
    }
    console.log(str);
    str = '';
}
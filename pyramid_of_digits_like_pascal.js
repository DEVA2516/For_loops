/* 49. Write a program to print a pyramid of digits as shown below for n number of
lines.
        1
      2 3 2
    3 4 5 4 3
  4 5 6 7 6 5 4
5 6 7 8 9 8 7 6 5 

*/

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
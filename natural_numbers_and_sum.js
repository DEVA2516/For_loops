// 3.Write a program to display n terms of natural number and their sum.

let num = 7;
let n = 1;
let sum = 0;
let str = '';
for (let i = 0; i < num; i++) {
    sum += n;
    str += n++ +" ";
}
console.log(str);
console.log("sum = " + sum);
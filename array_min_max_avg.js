// 15. Write a program to asked user to input positive integers to process count,
// maximum, minimum, and average or terminate the process with -1.


// let is = require("./isem.js");

let arr_size = prompt("array_size:",);
let a = [];

for (let ip = 0; ip < arr_size; ip++) {
    a[ip] = prompt("enter postive integers upto size",);
    if (a[ip] == -1)
        break;
}



if (!isempty(a)) {

    let min = a[0], max = a[0];
    let avg = 0, sum = 0, count = 0;

    for (let i = 0; a[i] !== undefined; i++)
        count++;

    console.log("count = " + count);

    for (let i = 0; i < a.length; i++) {
        if (a[i] < min)
            min = a[i];
    }
    console.log("min = " + min);

    for (let i = 0; i < a.length; i++) {
        if (a[i] > max)
            max = a[i];
    }
    console.log("max = " + max);

    for (let i = 0; i < a.length; i++) {
        sum += a[i];
    }
    avg = sum / a.length;

    console.log("avg = " + avg);
}
else
    console.log("array is empty........");

function isempty(value){
    return (value.length < 0)? ture : false;
}
// 33. Write a program to Check Whether a Number can be Express as Sum of Two Prime Numbers

let number = 25;
let flag = 1;
let temp = [];
let j = 0;
let count = 0;

for (let num = 2; num <= number; num++) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            flag = 0;
            break;
        }
        flag = 1;
    }
    if (flag == 1)
        temp[j++] = num;
}

console.log("num = " + temp);

for (let i = 0; i < temp.length; i++) {
    for (let j = i+1; j < temp.length; j++) {
       // if (temp[i] != temp[j]) {
            let sum = temp[i] + temp[j]
            if (sum == number) {
                console.log(number + " = " + temp[i] + "+" + temp[j]);
                count = 1;
            }
       // }
    }
}
if (count == 0) {
    console.log(number + " is Not a Sum Of Two Prime Numbers...");
}
else
    console.log(number + " is a sum of two prime numbers.......");

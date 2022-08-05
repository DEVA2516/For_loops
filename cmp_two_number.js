let num1 = 10;
let num2 = 15;
let count = 0;
for (i = 0; i < 3; i++) {
    if (num1 != num2 && count == 0) {
        console.log("num1 and num2 are not equal....");
        count++;
    }
    else if (num1 > num2 && count == 1) {
        console.log("num1 is greater than num2...");
        count++;
    }
    else if (num1 >= num2 && (count == 2 || count == 1 || count == 0)) {
        console.log("num1 is equal or to num2......");
        count++;
    }
    else if (num1 < num2 && count == 1) {
        console.log("num1 is less than num2");
        count++;
    }
    else
        continue;
}   
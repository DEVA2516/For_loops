// 8. Write a program to find the last prime number occur before the entered
// number

let number = prompt();

if (number >= 2 && (!isempty(number))) {
    for (let k = number; k >= 2; k--) {
        let flag = 1;
        for (let i = 2; i <= Math.sqrt(k); i++) {
            if (k % i == 0) {
                flag = 0;
                break;
            }
            flag = 1;
        }
        if (flag == 1) {
            console.log(k + " is prime");
            break;
        }
    }

}
else if ((number == 0 || number == 1) && (!isempty(number))) {
    console.log(number + " is not prime.......");

}
else {
    alert("Invlid number......try valid number>0");
}

function isempty(value) {
    return (value === undefined || value == null || value == '' || value == ' ') ? true : false;
}

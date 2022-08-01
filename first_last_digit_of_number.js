//let is = require("./isem.js");

// //let num = 12345;

// if (!is.isempty(num)) {
//     console.log("first digit = "+firstDigit(num));
//     console.log("last digit = "+lastDigit(num));
// }
// else
//     console.log("Invalid number......check number greater than zero....")

 function firstDigit(num){
    for(i=num;i>=10;i=parseInt(num))
        num = num/10;
    return i;
}


 function lastDigit(num) {
    return num % 10;
}

module.exports = {
    firstDigit,
    lastDigit
}

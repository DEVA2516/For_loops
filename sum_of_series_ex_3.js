// 13. Write a program to calculate the series (1) + (1+2) + (1+2+3) + (1+2+3+4) +
// ... + (1+2+3+4+...+n).

let num = prompt("",5);

if (num > 0 && !isempty(num)) {
    let sumofseries = 0;
    for (let i = 1; i <= num; i++) {
        let sum = 0;
        for (let j = 1; j <= i; j++) {
            sum += j;
            //console.log(sum);
        }
        sumofseries += sum;
    }

    console.log(sumofseries);
}
else
    console.log("Invalid number......Try number greater than zero........");


function isempty(value) {
    return (value == null || value === undefined || value == '') ? true : false;
}
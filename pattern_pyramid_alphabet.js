// 48.Write a program to display the pattern like pyramid using the alphabet.


let num = 5;
let k_arr = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let str = ' ';


for (let i = 1; i <= num; i++) {
    let k = 1;
    for (l = num - i; l >= 0; l--) {
        str += ' ';
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        if (j < i) {
            str += k_arr[k++] + ' ';
        }
        else
            str += k_arr[k--] + ' ';
    }
    console.log(str);
    str = '';
}


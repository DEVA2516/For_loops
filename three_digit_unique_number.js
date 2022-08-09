let str = '';

let range = 5;

for (let i = 1; i <= range; i++) {
    for (let j = 1; j <= range; j++) {
        for (let k = 1; k <= range; k++) {
            if (i != j && i != k && j != k) {
                str += i + " " + j + " " + k + " ";
                console.log(str);
                str ='';
            }
        }
    }
}
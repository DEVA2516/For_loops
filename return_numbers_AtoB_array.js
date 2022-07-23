let A = prompt();
let B = prompt();
const temp = new Array(B-A);
let j = A;
for(let i=0;i<temp.length;i++){
    temp[i] = j++;
}

console.log(temp);
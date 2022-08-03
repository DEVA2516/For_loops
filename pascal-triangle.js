 let num = 7;
// let sum = 1;
// let str = '';
// let array = [0,1,1,0];
// let k = 0;
let temp = [1,1];

for(let i=2;i<=num;i++){
    let j=0;
    let t=[];
    t[j++]=1;
    for(let i=1;i<temp.length;i++){
        t[j++] = temp[i-1] + temp[i]; 
    }
    t[j++] = 1;
    console.log(t);
    temp = t;
}
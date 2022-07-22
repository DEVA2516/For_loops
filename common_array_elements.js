const array1 = [25,12,10,34,40]
const array2 = [12,34,40,11,13,17]
let k = 0;
let temp = [];
for(let i=0;i<array1.length;i++) {
    for(let j=0;j<array2.length;j++){
        if(array1[i]==array2[j]){
            temp[k++] = array1[i];
        }
    }
}
console.log("array = "+ temp);
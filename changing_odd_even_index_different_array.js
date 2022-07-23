const odd_array = [1,8,9,20,10];
const even_array = [2,7,12,17,22];
for(i=1,j=0;i<odd_array.length&&j<even_array.length;i+=2,j+=2){
    let temp = odd_array[i];
    odd_array[i] = even_array[j];
    even_array[j] =temp;
}
console.log(odd_array);
console.log(even_array);
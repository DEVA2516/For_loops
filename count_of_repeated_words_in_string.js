let str = "woondeer whoooo iiiis thiiiiiisssssw";
let count = 1,k = 0;
let temp = [];
for(i=0;i<str.length;i++){
    if((str[i]==str[i-1]))
        count++;
    if(count == 1)
        temp[k++] = str[i];
         
    else 
        temp[k-1] = count;
    
    
    if(str[i]!=str[i+1])
        count = 1;
    
}
console.log(temp);
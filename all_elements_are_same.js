const array = [2,1,1,1];
let b = prompt();
if(b>=0){
let count = 0;
for(let i=0;i<array.length;i++){
    if(array[i]!=b){
        console.log("All elements are not same........");
        break;
    }
    count++;
}

if(count == array.length)
    console.log("All elements are same....");
}
else 
    console.log("invalid element..........Try valid element >=0!!!!!!!!!!!!!!!!!!!");
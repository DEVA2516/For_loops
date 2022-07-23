const array = [23,13,10,78,12,15,20];
b = 10;
Flag = 0;
for (let i=0;i<array.length;i++){
    if(array[i]==b){
        console.log("Found");
        Flag = 1;
        break;
    }
    Flag = 0;
}

if(Flag == 0){
    console.log("Not Found");
}
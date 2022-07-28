const a =[10,20,30,40,50];

if(!isempty(a)){
    for(let i=a.length-1,j=0;j<i;i--,j++){
        let temp = a[j];
        a[j] = a[i];
        a[i] = temp;
    }
    console.log("Reverse array = "+ a);
}

else
    console.log("array is empty.......");

function isempty(value){
    return (value.length <=0)?true:false;
}
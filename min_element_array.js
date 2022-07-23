const a =[10,20,30,1,2,3,];

if(!isempty(a)){
    let min = a[0];
    for(let i=0;i<a.length;i++){
        if(a[i]<min)
            min=a[i];
    }
    console.log(min);
}

else 
    console.log("Array is empty.......");

function isempty(value){
    return (value.length<=0)?true:false;

}
const a = [];

if(!isempty(a)) {

    for(let i=0;i<a.length;i++){
        let min = a[i];
        let minj = i;

        for(let j=i+1;j<a.length;j++){
            if(a[j]<min){
                min = a[j];
                minj = j;
            }
        }

        let temp = a[i];
        a[i] = a[minj];
        a[minj] = temp;
    }

    console.log(a);
}

else
    console.log("array is empty.......");

function isempty(value){
    return (value.length <=0)?true:false;
}

let str = "my classroom ";
let temp=[];

if(!isempty(str)){
    for (let i=0;i<str.length;i++){
        let count = 0;
        for(let j=0;j<str.length;j++){
            if(str[i]==str[j])
                count++;
        }
        if(temp[str[i]]!=1){
            console.log(str[i],count);
            temp[str[i]] = 1;
        }
    }
}

else
    console.log("String is empty...........");

function isempty(value){
    return (value ==''||value.length<=0)?true:false;
}
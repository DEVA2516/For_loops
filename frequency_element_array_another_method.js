let str = "whoo isss thiss";
let temp = [];
let k =0;

for(var i=0;i<str.length;i++){
    let count = 0;
    if(!found(...temp,str[i])){
    for(let j=0;j<str.length;j++){
        if(str[i]==str[j])
            count++;
    }
       console.log(str[i]+" "+count);
        temp[k++]=str[i];
     }
}

function found(){
    let found = false;
    for(let l=0;l<temp.length;l++){
        if(temp[l]==str[i]){
            //consol
            found = true;
            break;
        }
    }
    return found;
}
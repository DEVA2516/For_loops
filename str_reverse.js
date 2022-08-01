let str = "W3source";
str = str.split("");
//i=1;
//console.log(str.length);
for(let i = str.length-1,j=0;j<i;i--,j++){
    let temp = str[j];
    str[j] = str[i];
    str[i] = temp;
    //console.log(str);
}

console.log(str);


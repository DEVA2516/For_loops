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
str = str.toString();
let str1 = str.replace(/,/g,"");
console.log(str1);



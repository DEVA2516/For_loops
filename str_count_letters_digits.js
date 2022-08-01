let str = "This is javascript ec6...";

let a_count = 0,d_count = 0,s_count = 0,sp_count=0;

for(i=0;i<str.length;i++){

    if((str[i]>="a" && str[i]<='z') || (str[i]>='A' && str[i]<='Z'))
        a_count++;

    else if ((str[i]>='0' && str[i]<='9'))
        d_count++;

    else if (str[i]== ' ')
        sp_count++;
    
    else
        s_count++;
}


console.log("number of characters in string = "+str.length);
console.log("number of alphabets in string = "+a_count);
console.log("number of digits in string = "+d_count);
console.log("number of spaces in string = "+sp_count);
console.log("number of special characters in string = "+s_count);


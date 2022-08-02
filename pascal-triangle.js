let num = 7;
let sum = 1;
let str = '';

for(let i=0;i<=7;i++){
    
    for(let j=0;j<=i;j++){

        if(i==0||j==0)

             sum = 1;
             //console.log(str);
        else
            sum *= parseInt((i-j+1)/j);

        str += sum + " ";    
    }
    console.log(str);
    str ='';
}
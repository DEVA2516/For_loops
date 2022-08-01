num = 8345;
let str = '';

for(let i=num;i>0;i=parseInt(num)){
    rem = i % 10;
    if(rem == 1)
        str += "one" + " ";
    else if (rem == 2)
        str += "two" + " ";
    else if(rem == 3)
        str += "three"+ " ";
    else if(rem == 4)
        str += "Four" + " ";
    else if(rem == 5)
        str += "Five"+ " ";
    else if(rem == 6)
        str += "Six"+" ";
    else if(rem == 7)
        str += "Seven"+" ";
    else if(rem == 8)
        str += "Eight"+" ";
    else if(rem == 9)
        str += "Nine"+" ";
    else
        str += "Zero"+" ";
    
    num /= 10;
    }
    
    let a = str.split(" ");
    //console.log(a);
    
    for(let i=a.length-1,j=0;i>j;i--,j++){
        let temp = a[j];
        a[j] = a[i];
        a[i] = temp;
        //console.log(i);
    }

    console.log(a);
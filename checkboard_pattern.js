let num = 5;
let str ='';

if (num % 2 != 0){
    for(let i =0;i<num;i++){
        for(let j=0;j<num;j++){
        
            str += ((i%2 == 1 && j%2 ==1 )||(i%2==0 && j%2 == 0))?"black ":"white ";
            //str += (j%2==0)?"black ":"white ";
        
        }
        console.log(str);
        str = '';   
    }
}

else {
    for(let i =0;i<num;i++) {
        for(let j=0;j<num;j++) {
            
           // str += ((i%2 == 1 && j%2 ==1 )||(i%2==0 && j%2 == 0))?"black ":"white ";
            str += (j%2==0)?"black ":"white ";
            
        }
        console.log(str);
        str = '';
    }
}

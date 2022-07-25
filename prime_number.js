let number = prompt();

if(number >= 2 && (!isempty(number))){
    let flag = 1;
    for(let i=2;i<=Math.sqrt(number);i++){
        if(number % i == 0) {
            flag = 0;
            console.log(number + " is not prime");
            break;
        }
         flag = 1;   
    }

    if(flag == 1) {
        console.log(number+" is prime");
    }
}
else if ((number==0||number == 1) && (!isempty(number))){
    console.log(number + " is not prime.......");

}
else {
    console.log("Invlid number......try valid number>0");
}

function isempty(value){
    return (value === undefined||value == null||value == ''||value==' ')?true:false;
}

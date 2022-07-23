number = 20;

if(number >= 2){
    let flag = 1;
    for(let i=2;i<=Math.sqrt(number);i++){
        if(number % i == 0) {
            flag = 0;
            console.log(number + " is not prime");
            break;
        }
            
    }

    if(flag == 1) {
        console.log(number+" is prime");
    }
}
else if (number==0||number == 1){
    console.log(number + " is not prime.......");

}
else {
    console.log("Invlid number......try valid number>0");
}

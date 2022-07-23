let number = 25;
if(number >= 2){
    var flag = 0;
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
else if (number==0||number == 1){
    console.log(number + " is not prime.......");

}
else {
    console.log("Invlid number......try valid number 1-inifinity");
}
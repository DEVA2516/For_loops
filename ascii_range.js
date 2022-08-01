let start = 120;
let end = 127;
let str = '';

if(start >=32 && start < end && end > start && end<=127) {
    for(i=start;i<=end;i++){
        str = String.fromCharCode(i)
        console.log(i+" ---> "+str);
    }
}
else if(start>=0 && start < end && end > start && end<=31 )
    console.log("Non-printable characterts")


else 
    console.log("Check the range between 32 - 127 ........");
let num = 5;

if(num>0 && !isempty(num)){
    for(let i=1;i<=num;i++){
        cube = i ** 3;
        console.log("Number is : "+num+" and cube is : "+cube);
    }
}


else
    console.log("Invalid number......try number greater than zero......");

function isempty(value){
        return (value == null||value === undefined||value=='')?true:false;
    }
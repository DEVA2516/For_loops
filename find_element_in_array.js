const array = [23,13,10,78,12,15,20];
let b = prompt();

let Flag = 0;

if((b>=0)&&(!isempty(b))) {
    for (let i=0;i<array.length;i++){
        if(array[i]==b){
            console.log("Found");
            Flag = 1;
            break;
        }
        Flag = 0;
    }

    if(Flag == 0)
        console.log("Not Found");
    
}
else 
    console.log("Invalid number......Try number b>=0");


function isempty(value) {
    return (value==null||value == ' '||value.length <= 0||value === undefined)?true:false;
}
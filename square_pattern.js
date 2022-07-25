let num = prompt("",5);
let mystr = ' '
if(num>0 && !isempty(num)){
    for(let i=0;i<num;i++){
        mystr = ' '
        for(let j=0;j<num;j++){
            mystr += "#";
            //console.log("#");
        }
        console.log(mystr);
    }
}


else
    console.log("Invalid number......try number greater than zero......");

function isempty(value){
        return (value == null||value === undefined||value=='')?true:false;
    }
let num = prompt();

if(num>0 && !isempty(num)){
    let fact = 1;
    for(let i =1;i<=num;i++)
        fact = fact * i;
    console.log(fact);
}
else
    console.log("Invalid number.......try number greater than zero...");

    function isempty(value){
        return (value==''||value==null||value===undefined)?true:false;
    }

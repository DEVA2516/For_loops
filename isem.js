function isempty(value){
    
    return (value==null||value === undefined||value.length<=0||value == '')?true:false;
}

module.exports={isempty};
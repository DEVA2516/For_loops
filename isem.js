function isempty(value){
    
    return (value==null||value === undefined||value.length<=0||value == ''||value <=0 )?true:false;
}

module.exports={isempty};
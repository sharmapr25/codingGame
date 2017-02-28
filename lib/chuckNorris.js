var unaryFormOf = {'1':'0 ','0':'00 '};

var convertIntoUnary = function(binaryForm){
    return binaryForm.split("").reduce(function(init, curr){
       if(init.number != curr)
            init.value.push(unaryFormOf[curr]);
        init.number = curr;
        init.value[init.value.length-1] += '0';
        return init;
    },{number:'', value:[]}).value.join(" ");
}  

exports.encodeMsg = function(MESSAGE){
    var encoded = MESSAGE.split("").map(function(character){
        return ("0000000"+character.charCodeAt(0).toString(2)).substr(-7);
    }).join("");

    return convertIntoUnary(encoded);
};

exports.decodeMsg = function(encodedMsg){
    
}
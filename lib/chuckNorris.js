var unaryFormOf = {'1':'0 ','0':'00 '};
var binaryFormOf = {'0':'1','00':'0'};

var convertIntoUnary = function(binaryForm){
    return binaryForm.split("").reduce(function(init, curr){
       if(init.number != curr)
            init.value.push(unaryFormOf[curr]);
        init.number = curr;
        init.value[init.value.length-1] += '0';
        return init;
    },{number:'', value:[]}).value.join(" ");
};

var convertIntoString = function(msg){
    var times = msg.length/7;
    var stringMsg = "";
    for (var i = 0; i < times; i++) {
        stringMsg += String.fromCharCode(parseInt(msg.substr(i*7,7),2));
    }
    return stringMsg;
}

exports.encodeMsg = function(message){
    var encoded = message.split("").map(function(character){
        return ("0000000"+character.charCodeAt(0).toString(2)).substr(-7);
    }).join("");

    return convertIntoUnary(encoded);
};


exports.decodeMsg = function(message){
    var pairedMsg = {prefix:'',value:[]};
    message.split(" ").forEach(function(word,index){
        if(index%2==0)
            pairedMsg.prefix = word;
        else{
            pairedMsg.value.push(word.split("").map(function(char){
                return binaryFormOf[pairedMsg.prefix];
            }).join(""));
        }        
    }); 
    return convertIntoString(pairedMsg.value.join(""));
};
var convertIntoSet = function(setOfNumbers, length){
	var set = [];
	for (var i = 0; i < setOfNumbers.length; i++) {
		for (var j = i; j < length; j++) {
			
		}
	}
}

var calculateFactors = function(setOfNumbers, maxLength){
	var set = convertIntoSet(setOfNumbers, maxLength);
	set.reduce(function(init, curr){
		var product = multiplicationOf(curr);
		if(init.value < product){
			init.value = product;
			init.set = curr;
		}
		return init;
	},{set:"0",value:0})
};

module.exports = calculateFactors;
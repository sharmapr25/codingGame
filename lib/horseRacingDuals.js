var horseRacingDuals = function(horsesStrength){
	return horsesStrength.sort().reduce(function(init, curr){
		var d = Math.abs(curr-init.value);
		init.diff = Math.min(init.diff, d);
		init.value = curr;
		return init;
	},{value:0,diff:Infinity}).diff;
};

module.exports = horseRacingDuals;
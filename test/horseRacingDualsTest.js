var assert = require('assert');
var horseRacingDuals = require('../lib/horseRacingDuals');

describe('horseRacingDuals',function(){
	it('should return 1 as closest difference for given list',function(){
		var horsesStrength = [3,5,8,9];
		assert.equal(1, horseRacingDuals(horsesStrength));
	});

	it("should return 1 for any order for given list",function(){
		var horsesStrength = [10,5,15,17,3,8,11,28,6,55,7];
		assert.equal(1, horseRacingDuals(horsesStrength));
	});

	it("should return 47 as closest difference for given big list",function(){
		var horsesStrength = [99999,9993353,9993268,9993219,9993162,9993016,
		9992897,9992803,9992721,9992630,9992513,9992414,9992326,9992279,9992139,
		9991988,9991872,9991770,9991671,9991560,9991477,9991383,9991324,9991220]

		assert.equal(47, horseRacingDuals(horsesStrength));
	});
});
var assert = require('assert');
var chuckNorris = require('../lib/chuckNorris');

describe('encodedMsg',function(){
	it("should return message into zero's form",function(){
		var expected = "0 0 00 0000 0 00";
		assert.equal(expected, chuckNorris('C'));
	});

	it("should return encodedMsg for two CC",function(){
		var expected = "0 0 00 0000 0 000 00 0000 0 00";
		assert.equal(expected, chuckNorris('CC'));
	});

	it("should return encodedMsg for %",function(){
		var expected = "00 0 0 0 00 00 0 0 00 0 0 0";
		assert.equal(expected, chuckNorris("%"));
	});

	it("should return encodedMsg for given word",function(){
		var expected = "0 0 00 0000 0 0000 00 0 0 0 00 000 0 000 00 0"
			+" 0 0 00 0 0 000 00 000 0 0000 00 0 0 0 00 0 0 00";
		assert.equal(expected, chuckNorris("Chuck"));
	});
});

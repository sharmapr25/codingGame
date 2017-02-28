var assert = require('assert');
var chuckNorris = require('../lib/chuckNorris');

describe('encodeMsg',function(){
	var encodeMsg = chuckNorris.encodeMsg;
	it("should return message into zero's form",function(){
		var expected = "0 0 00 0000 0 00";
		assert.equal(expected, encodeMsg('C'));
	});

	it("should return encodedMsg for two CC",function(){
		var expected = "0 0 00 0000 0 000 00 0000 0 00";
		assert.equal(expected, encodeMsg('CC'));
	});

	it("should return encodedMsg for %",function(){
		var expected = "00 0 0 0 00 00 0 0 00 0 0 0";
		assert.equal(expected, encodeMsg("%"));
	});

	it("should return encodedMsg for given word",function(){
		var expected = "0 0 00 0000 0 0000 00 0 0 0 00 000 0 000 00 0"
			+" 0 0 00 0 0 000 00 000 0 0000 00 0 0 0 00 0 0 00";
		assert.equal(expected, encodeMsg("Chuck"));
	});
});

describe('decodeMsg',function(){
	var decodeMsg = chuckNorris.decodeMsg;
	
	it("should return C for encodedMsg",function(){
		var message = "0 0 00 0000 0 00";
		assert.equal('C', decodeMsg(message));
	});

	it("should return CC for encodedMsg",function(){
		var message = "0 0 00 0000 0 000 00 0000 0 00";
		assert.equal('CC',decodeMsg(message));
	});

	it("should return Chuck for given encodedMsg ",function(){
		var message ="0 0 00 0000 0 0000 00 0 0 0 00 000 0 000 00 0"
			+" 0 0 00 0 0 000 00 000 0 0000 00 0 0 0 00 0 0 00";
		assert.equal('Chuck',decodeMsg(message));
	});
});


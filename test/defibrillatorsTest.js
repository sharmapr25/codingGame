var assert = require('assert');
var findNearestDFIB = require('../lib/defibrillators.js');

describe('findNearestDFIB',function(){
	it('should return nearest dfib from given three dfib',function(){
		var userLon = '3,879483';
		var userLat = '43,608177';
		var firstAddr = "1;Maison de la Prevention Sante;6 rue Maguelone" 
			+"340000 Montpellier;;3,87952263361082;43,6071285339217";

		var secAddr = "2;Hotel de Ville;1 place Georges Freche 34267" 
			+"Montpellier;;3,89652239197876;43,5987299452849";

		var thirdAddr = "3;Zoo de Lunaret;50 avenue Agropolis 34090 Mtp;;3,87388031141133;43,6395872778854";

		var description = [firstAddr, secAddr, thirdAddr];
		var user = ["3,879483","43,608177"];
		var nearestDFIB = findNearestDFIB(description,user).detail;
		assert.equal("Maison de la Prevention Sante", nearestDFIB.name);
		assert.equal("6 rue Maguelone340000 Montpellier",nearestDFIB.address);
	});
});
var convertIntoLonAndLat = function(list, lon, lat){
    list['lon'] = parseFloat(lon.replace(',','.'));
    list['lat'] = parseFloat(lat.replace(',','.'));   
    return list;
};

var formOfDefib = function(list){
	return list.map(function(defib){
		var DEFIB = defib.split(";");
		defib = {};
		defib['name'] = DEFIB[1];
		defib['address'] = DEFIB[2];
		convertIntoLonAndLat(defib, DEFIB[4],DEFIB[5]);
		return defib;
	});
};

var calculateDistance = function(user, defib){
	var lonA = user.lon, lonB = defib.lon;
    var latA = user.lat, latB = defib.lat;
	var x = Math.abs((lonB - lonA)* Math.cos((latA + latB)/2));
    var y = Math.abs(latB - latA);
    return Math.sqrt(Math.pow(x,2)+Math.pow(y,2))*6371;
};

var findNearestDFIB = function(collection, userlonAndLat){
	var user = {};
	convertIntoLonAndLat(user, userlonAndLat[0],userlonAndLat[1]);
	var defibCollection = formOfDefib(collection);
	return defibCollection.reduce(function(init, curr){
        var distance = calculateDistance(user, curr);
        if(distance <= init.distance){
          init.detail = curr;
          init.distance = distance;
        }
        return init;
    },{'distance':Infinity,'detail':{}});
}

module.exports = findNearestDFIB;
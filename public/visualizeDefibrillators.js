var user = {};
convertIntoLonAndLat(user, "3,879483","43,608177");
var color = ["red","green","gray","blue","lightgray"];

var drawRect = function(collection,name){
	console.log('collection',collection);
	return d3.select('.container').selectAll('div')
		.data(collection).enter()
		.append('div')
		.style("width", function(d){return d.distance+"px"})
		.style("height", 50+"px")
		.style("background-color",function(d,i){return color[i];})
		.attr("class",name)
		.append('text')
		.text(function(d){return d.detail.name+'\n'});
};

var renderDefibrillators = function(data){
	var defibCollection = formOfDefib(data);
	var defibWithDistance = defibCollection.map(function(defib){
		var DEFIB = defib;
		defib = {};
		defib['distance'] = calculateDistance(user, DEFIB);
		defib['detail'] = DEFIB;
		return defib;
	});

	// var svg = d3.select('.container').append('svg')
	// 	.attr("width", 700)
	// 	.attr("height",600);
	drawRect(defibWithDistance,'defib');
};

var start = function(){
	var http = new XMLHttpRequest();
	http.onreadystatechange = function(){
		if(this.readyState == http.DONE && this.status == 200){
			renderDefibrillators(JSON.parse(this.responseText));
		}
	}
	http.open('GET','/data', true);
	http.send();
};
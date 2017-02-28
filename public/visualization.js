var showChuckNorris = function(){
	var message = document.getElementsByName('string')[0].value;
	var encoded = encodeMsg(message);
	document.getElementsByClassName("chuckNorrisMessage")[0].innerHTML = encoded;
}

var showMessage = function(){
	var message = document.getElementsByName('encodedMsg')[0].value;
	var decoded = decodeMsg(message);
	document.getElementsByClassName("stringMessage")[0].innerHTML = decoded;
}
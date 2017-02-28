var showChuckNorris = function(){
	var message = document.getElementsByName('string')[0].value;
	var encoded = encodeMsg(message);
	document.getElementsByClassName("chuckNorrisMessage")[0].innerHTML = encoded;
}
var Server = function(){

};


var handle = Server.prototype;

handle.createMap = function(width,height){
	var arr = [];
	for (var i = 0; i < height; i++) {
		arr.push([]);
		for(var j=0;j<width;j++){
			arr[i].push(-1);
		}
	}

	var start = {x:width/2-1,y:height/2-1};
	arr[start.y][start.x] = 0
	arr[start.y][start.x+1] = 1
	arr[start.y+1][start.x] = 1
	arr[start.y+1][start.x+1] = 0

	return arr;
}
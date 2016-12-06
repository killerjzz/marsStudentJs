var server = new Server();

var map = server.createMap(8,8);

console.log(map);

$(function(){
	renderMap(map);
});


// 
function renderMap(map){
	for (var y = 0; y < map.length; y++) {
		for (var x = 0; x < map[y].length; x++) {
			createBox(x,y,map[y][x]);
		}
	}

	function createBox(x,y,color){
		var boxSize = 40;
		var $box = $('<div/>')
			.addClass('box')
			.css('background-color',color==-1?"gray":color==0?'black':'white')
			.css({'left':x*boxSize,'top':y*boxSize});
		$('#chessBoard').append($box);
	}
}
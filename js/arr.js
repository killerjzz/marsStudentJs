var arr = [];

// 错误的写法
// for (var i = 0; i < 100; i++) {
// 	arr[i] = function(){
// 		return i;
// 	}
// }


// for (var i = 0; i < 100; i++) {
// 	arr[i] = (function(a) {
// 		return function() {
// 			return a;
// 		};

// 	})(i);
// }


var makeFn = function(a){
	return function(){
		return a;
	}
};
for (var i = 0; i < 100; i++) {
	arr[i] = makeFn(i);
}
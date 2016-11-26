var name = "The Window";　　
var object = {　　　　
	name: "My Object",
	getNameFunc: function() {
		alert(this.name);
		var self = this;　　　　　　
		return function() {　　　　　　　　
			return self.name;　　　　　　
		};　　　　
	}　　
};　　
alert(object.getNameFunc()());


// 　
// var name = "The Window";　　
// var object = {　　　　
// 	name: "My Object",
// 	　　　　getNameFunc: function() {　　　　　　
// 		var that = this;　　　　　　
// 		return function() {　　　　　　　　
// 			return that.name;　　　　　　
// 		};　　　　
// 	}　　
// };　　
// alert(object.getNameFunc()());
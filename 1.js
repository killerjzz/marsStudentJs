// // new
// var Person = function(){
// 	this.name = 'jack';
// };

// var p = new Person();

// // 当你使用new关键字,在函数内部创建一个对象,然后把this指向这个对象,最后这个对象返回
// console.log(p.name);



// // call apply
// var obj={};
// Person.call(obj);

// console.log(obj);

// var age = 22;
// var tom ={
// 	age:12,
// 	say:function(){
// 		console.log(this.age);
// 	}
// }

// tom.say();

// var f = tom.say;
// f();


var f1 = function(){
	console.log(this.name);
};

f1.call({name:'mars'});

var f2 = f1.bind({name:'sun'});
f2();

f2.call({name:'earth'});
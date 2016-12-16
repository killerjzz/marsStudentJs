Vue.component('todo-item', 
	{ 
		props: ['todo'],
  		template: '<li>{{ todo }}</li>'
	}
);


var list =[
	'美元',
	'人民币',
	'日元',
	'英镑'

];

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    myTitle:'puman',
    isShow:false,
    list:list,
    todoData:{text:'zhongguo'}
  },
  methods:{
  	refresh:function(num){
  		this.message = new Date().toString();
		this.isShow = true;
		console.log(num);
  	}
  }
});


// function refresh(){
// 	app.message = new Date().toString();
// 	app.isShow = true;
// }
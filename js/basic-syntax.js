describe('basic-syntax',function(){
	it('求1到100的和',function(){
		var s;
		// 输入区域 start

		
		
		// 输入区域 end
		expect(s).toBe(5050);
	});

	it('获取数组末两位',function(){
		var arr = [1,2,3];
		var arr2 = [1];
		var fn;
		// 输入区域 start

		
		
		// 输入区域 end
		expect(fn(arr)).toEqual([2,3]);
		expect(fn(arr2)).toEqual([1]);
	});


	it('字符串首尾去空格',function(){
		var str = '  ab c ';
		var fn;

		// 输入区域 start

		
		
		// 输入区域 end
		expect(fn(str)).toBe('ab c');
	});

	it('空格或者逗号都是分隔符',function(){
		var str ='a b,c,dd e';
		var fn;

		// 输入区域 start

		
		
		// 输入区域 end
		expect(fn(str)).toEqual([a,b,c,dd,e]);
	});

	
	it('字符串中字符s出现的个数',function(){
		var str = 'abssjsd';
		var fn = null;
		// 输入区域 start


		
		// 输入区域 end
		expect(fn(str)).toBe(3);
	});



	
	it('精确到小数点后1位',function(){
		var s = 34.567;
		var fn = null;
		// 输入区域 start


		
		// 输入区域 end
		expect(fn(s)).toBe(34.5);
	});

	
	it('找到数组中最大值',function(){
		var arr = [100,56,-1,45,3,7];
		var max;
		// 输入区域 start


		
		// 输入区域 end
		expect(max).toBe(100);
	});


	
	it('函数数组',function(){
		var arr = [];
		var rnd = Math.floor(Math.random()*100);
		// 输入区域 start


		
		// 输入区域 end
		expect(arr[rnd]()).toBe(rnd);
	});


	it('唯一id',function(){
		var genGetId;

		// 输入区域 start


		
		// 输入区域 end
		var getArmyId = genGetId('army');
		expect(getArmyId()).toBe('army0');
		expect(getArmyId()).toBe('army1');

		var getStudentId = genGetId('student');
		expect(getStudentId()).toBe('student0');
		expect(getStudentId()).toBe('student1');



	});


	it('类',function(){
		var s;
		var Student;

		// 输入区域 start


		
		// 输入区域 end
		s = new Student('jack',20);
		expect(s.name).toBe('jack');
		expect(s.getAge()).toBe(20);
	});


	// 超纲题目
	xit('链式相加函数内的参数',function(){
		var fn;
		// 输入区域 start


		
		// 输入区域 end
		// 2+3+5+6+2 = 18
		expect(fn(2)(3)(5,6)(2)).toBe(18);
	});

	// 超纲题目
	xit('完成数字原型方法times和sub',function(){
		// 输入区域 start


		
		// 输入区域 end
		// 2*3-4=2
		expect((2).times(3).sub(4)).toBe(2);
	});

	// 超纲题目
	xit('完成类似bind方法的myBind(只有调用方式不同)',function(){
		var myBind;
		// 输入区域 start


		
		// 输入区域 end
		var getName = function(){
			return this.name;
		};
		var getNamePro = function(age){
			return this.name+' is '+age;
		};

		expect(myBind(getName,{name:'jack'})()).toBe('jack');
		expect(myBind(getNamePro,{name:'jack'},20)()).toBe('jack is 20');
	});


});









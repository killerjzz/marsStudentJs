// 有一个整型偶数n(2<= n <=10000),
// 你要做的是：先把1到n中的所有奇数从小到大输出，再把所有的偶数从小到大输出。
function fn1(n) {
	var odd = [];
	var even = [];
	for (var i = 3; i <= n; i += 2) {
		odd.push(i);
	}
	for (var i = 2; i <= n; i += 2) {
		even.push(i);
	}
	console.log(odd, even);
}

fn1(10);



// 描述
// 设计一个从5个整数中取最小数和最大数的程序
// 输入
// 输入只有一组测试数据，为五个不大于1万的正整数
// 输出
// 输出两个数，第一个为这五个数中的最小值，第二个为这五个数中的最大值，两个数字以空格格开。
// 样例输入
// 1 2 3 4 5
// 样例输出
// 1 5

function fn2(arr) {
	console.log([Math.min.apply(null, arr), Math.max.apply(null, arr)].join(' '));
}
fn2([1, 4, 222, 34, 3]);


// ###############################################################################################

// 描述
// 相传韩信才智过人，从不直接清点自己军队的人数，只要让士兵先后以三人一排、五人一排、七人一排地变换队形，而他每次只掠一眼队伍的排尾就知道总人数了。输入3个非负整数a,b,c ，表示每种队形排尾的人数（a<3,b<5,c<7），输出总人数的最小值（或报告无解）。
// 已知总人数不小于10，不超过100 。
// 输入
// 输入3个非负整数a,b,c ，表示每种队形排尾的人数（a<3,b<5,c<7）。例如,输入：2 4 5
// 输出
// 输出总人数的最小值（或报告无解，即输出No answer）。实例，输出：89
// 样例输入
// 2 1 6
// 样例输出
// 41

function fn3(a, b, c) {
	for (var i = 10; i <= 100; i++) {
		if (i % 3 == a && i % 5 == b && i % 7 == c) {
			console.log(i);
			return;
		}
	}
	console.log('No answer');
}
fn3(2, 1, 6);


// ###############################################################################################
// 水仙花数定义各个位数立方和等于它本身的三位数。
// 打印所有水仙花数

function fn4() {
	for (var i = 100; i <= 999; i++) {
		var arr = (i + '').split('');
		if (arr.reduce(function(memo, n) {
				return memo + Math.pow(n, 3);
			}, 0) == i) {
			console.log(i);
		}
	}
}

fn4();


// ###############################################################################################
// 公约数和公倍数
// 时间限制：1000 ms  |  内存限制：65535 KB
// 难度：1
// 描述
// 小明被一个问题给难住了，现在需要你帮帮忙。问题是：给出两个正整数，求出它们的最大公约数和最小公倍数。
// 输入
// 第一行输入一个整数n（0<n<=10000)，表示有n组测试数据;
// 随后的n行输入两个整数i,j（0<i,j<=32767)。
// 输出
// 输出每组测试数据的最大公约数和最小公倍数
// 样例输入
// 3
// 6 6
// 12 11
// 33 22
// 样例输出
// 6 6
// 1 132
// 11 66

function fn5(a, b) {
	function yue(a, b) {
		var arr = [];
		var min = Math.min(a, b);
		for (var i = 1; i <= min; i++) {
			if (a % i == 0 && b % i == 0) {
				if (isShushu(i)) {
					arr.push(i);
				}
			}
		}
		return arr.reduce(function(memo, n) {
			return memo * n;
		}, 1);
	}

	function bei(a, b) {
		return a * b / yue(a, b);
	}

	function isShushu(a) {
		for (var i = 2; i < a; i++) {
			if (a % i == 0) {
				return false;
			}
		}
		return true;
	}

	console.log(yue(a, b), bei(a, b));
}

fn5(6, 6);
fn5(12, 11);
fn5(33, 22);
var Student = (function() {
	var count = 0;

	function Student(name) {
		this.name = name;
		count++;
	}

	Student.getCount = function() {
		return count;
	};

	return Student;
})();



function Student2(name) {
	this.name = name;
	Student2.count++;
}

Student2.count = 0;

Student2.getCount = function() {
	return Student2.count;
};
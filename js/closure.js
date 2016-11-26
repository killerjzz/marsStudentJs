var getId = (function() {

	var id = 0;

	function getId() {
		return ++id;
	}

	return getId;
})();
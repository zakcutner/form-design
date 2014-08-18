var randomClass = function() {
	var classes = ['1','2','3'];
	var class = Math.floor(Math.random() * classes.length));
	return 'pic-' + class;
};

$('body').addClass(randomClass());
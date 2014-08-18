var randomPic = function() {
	var picNames = ['1', '3'];
	var picName = picNames[Math.floor(Math.random() * picNames.length)];
	return 'url(img/pic-' + picName + '.JPG)';
};
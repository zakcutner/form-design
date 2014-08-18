var randomPic = function() {
	var picNames = ['1','2','3'];
	var picName = Math.floor((Math.random() * picNames.length) + 1);
	return 'url(img/pic-' + picName + '.JPG)';
};
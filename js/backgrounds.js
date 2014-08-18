function randomClass()
{
	var classes = ['a','b','c'];
	return classes[Math.floor(Math.random()*3)]
}
$('body').addClass(randomClass());
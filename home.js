var links = [
	'google',
	'church',
	'test'
];

function init() {
	createLinks(links)
	positionLinks()
}

function createLinks(links){
	for (var i = 0; i < links.length; i++) {
		var currentLink = $("<a class = 'floatingLink' href = '/" + links[i] + "'>"+ links[i] + "</a>")
		$(".main").append(currentLink)
	}
}

function positionLinks() {
	var allLinks = $(".floatingLink");
	for (var i = 0; i < allLinks.length; i++) {
		var x = Math.random()*(window.innerWidth - 100) + "px"
		var y = Math.random()*window.innerHeight + "px"
		console.log(y)
		allLinks[i].style.left = x
		allLinks[i].style.top = y
	}
}

$(document).ready(init);
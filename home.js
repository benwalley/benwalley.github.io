var links = [
	{link:'google', image: 'google.PNG', title:'Fake copy of google search page'},
	{link:'dot-to-dot', image: 'dot-to-dot.PNG', title: "Create dot to dot puzzles."},
	{link:'lineWords', image: 'lineWords.PNG', title: "Create words with random dots and lines"}

];

function init() {
	createLinks(links)
	positionLinks()
}

function createLinks(links){
	for (var i = 0; i < links.length; i++) {
		var newBlock = $("<a class='link-block' href = '/" + links[i].link + "' ></a>")
		var blockImage = $("<div class='link-block-image'></div>")
		blockImage.css("background-image", "url(images/" + links[i].image + ")");
		var blockTitle = $("<span class='link-block-title'>" + links[i].title +"</span>");

		newBlock.append(blockImage)
		newBlock.append(blockTitle)
		
		$(".main").append(newBlock)
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

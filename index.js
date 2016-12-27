$(document).ready(function(){

	var cat1 = "/catPic.jpg";
	var cat2 = "/catPic2.jpg"

	$("#catName").text("Atom");
	$("#catPic").append('<img id="catPics" src=/catPic.jpg />')

	$("#catName2").text("Ion");
	$("#catPic2").append('<img id="catPics" src=/catPic2.jpg />')

	var initialCount = 0;
	var initialCount2 = 0;

	$("#catPic").on('click', function(){
		var countLog = initialCount++;
		$("#numberOfClicks").prepend().text(countLog);
	});

	$("#catPic2").on('click', function(){
		var countLog2 = initialCount2++;
		$("#numberOfClicks2").prepend().text(countLog2);
	});


});
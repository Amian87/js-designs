$(document).ready(function(){

	var initialCount = 0;

	$("#catPic").on('click', function(){
		countLog = initialCount++;
		$("#numberOfClicks").text(countLog);

	});
});
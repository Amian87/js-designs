$(document).ready(function(){
 
	// var catsArray = [
	// 					{ name: "Ion",
	// 					  catlink: "/catPic.jpg"		
	// 					},	

	// 					{ name: "Atom",
	// 					  catlink: "/catPic2.jpg"		
	// 					},

	// 					{ name: "Helium",
	// 					  catlink: "/catPic.jpg"		
	// 					},

	// 					{ name: "Lithium",
	// 					  catlink: "/catPic2.jpg"		
	// 					},

	// 					{ name: "Beryllium",
	// 					  catlink: "/catPic2.jpg"		
	// 					},

	// 				];

	var catsArray = [ "/catPic.jpg", "/catPic2.jpg", "/catPic.jpg", "/catPic2.jpg", "/catPic.jpg"];

	// console.log(catsArray[0]);

	$.each(catsArray, function(i, catpic){
		$("#cat_pic").append('<img src='+ catpic +' height=300px width= 350px/>');
		$(".cat_pic").append('<img src='+ catpic +' height=150px width= 200px/>');

	});

	var catCount = 0;
		$("#cat_pic").click(function(){
			alert("hey");
			// $(".cat_count").text(catCount++);


		});

	function counter () {
		var catCount = 0;
		$("#cat_pic").click(function(){
			alert("hey");
			// $(".cat_count").text(catCount++)

		});

	};
	
	counter();

});



// var cat1 = "/catPic.jpg";
	// var cat2 = "/catPic2.jpg"

	// $("#catName").text("Atom");
	// $("#catPic").append('<img id="catPics" src=/catPic.jpg />')

	// $("#catName2").text("Ion");
	// $("#catPic2").append('<img id="catPics" src=/catPic2.jpg />')

	// var initialCount = 0;
	// var initialCount2 = 0;

	// $("#catPic").on('click', function(){
	// 	var countLog = initialCount++;
	// 	$("#numberOfClicks").prepend().text(countLog);
	// });

	// $("#catPic2").on('click', function(){
	// 	var countLog2 = initialCount2++;
	// 	$("#numberOfClicks2").prepend().text(countLog2);
	// });
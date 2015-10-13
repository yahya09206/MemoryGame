$(document).ready(function(){

	var clickedOne;
	var clickedTwo;

	var clickedImg1;
	var clickedImg2;
	//code to prevent page from refreshing when submit button is pressed
	$('.submit').click(function(event){
		event.preventDefault();
		document.getElementById(".submit").reset();

	});

	$('.pics').hide()

	// $(".pics").fadeOut("fast");

	// $(".tile").click(function(){
	// 	$("#pic_one").fadeIn("fast");
	// });

	$('.container').on('click', 'div.tile', function(){
		$(this).find('img').show();
		var img = $(this).find('img');
		if (!clickedOne){
			clickedOne = img.attr('src');
			clickedImg1 = img;
		}else{
			clickedTwo = img.attr('src');
			clickedImg2 = img;
			if(clickedOne === clickedTwo){
				console.log('it works');
				
			}else{
				var timeoutId = setTimeout(function () {
					console.log('You are wrong');
					clickedImg1.hide();
					clickedImg2.hide();
					clearTimeout(timeoutId);
				}, 1000);
			}
			clickedOne = null;
			clickedTwo = null;
		}
	})

});
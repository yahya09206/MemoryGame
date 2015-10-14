//code to run after page is fully loaded
$(document).ready(function(){

	//declared variable clicked for player one and two also which images were clicked
	var clickedOne;
	var clickedTwo;
	var clickedImg1;
	var clickedImg2;
	var matches = 0;
	var numClicks = 0;
	var playerOne;
	var playerTwo;
	var player1 = true;

	var url = [ "http://i1345.photobucket.com/albums/p670/JLe10371037/Samuel-L-Jackson-baby-out-of-my-face-spike-awards-1354071672z_zps8b119d51.gif",
		"http://i1345.photobucket.com/albums/p670/JLe10371037/Samuel-L-Jackson-baby-out-of-my-face-spike-awards-1354071672z_zps8b119d51.gif",

		"http://i.imgur.com/Z8mGjEk.gif",
		"http://i.imgur.com/Z8mGjEk.gif",

		"http://24.media.tumblr.com/176122479cd4656568b3f58a5cd72f3c/tumblr_mkhmtb0idq1s0uuv7o6_r1_250.gif",
		"http://24.media.tumblr.com/176122479cd4656568b3f58a5cd72f3c/tumblr_mkhmtb0idq1s0uuv7o6_r1_250.gif",

		"http://25.media.tumblr.com/tumblr_m3je3fYHhb1r5r8duo1_250.gif",
		"http://25.media.tumblr.com/tumblr_m3je3fYHhb1r5r8duo1_250.gif",

		"http://38.media.tumblr.com/tumblr_lkqyd0GGHE1qc3n92o1_500.gif",
		"http://38.media.tumblr.com/tumblr_lkqyd0GGHE1qc3n92o1_500.gif",

		"http://media.tumblr.com/tumblr_lo2tyrWh8o1qfeod9.gif",
		"http://media.tumblr.com/tumblr_lo2tyrWh8o1qfeod9.gif"


	];

	var gameTiles = $('.tile');
	shuffle(url);
	console.log(url);
	gameTiles.each(function(index){
	var img = $(this).find('img');
	img.attr('src', url[index]);
	});

	function shuffle(array) {
  			var currentIndex = array.length, temporaryValue, randomIndex ;

  			// While there remain elements to shuffle...
  			while (0 !== currentIndex) {

    		// Pick a remaining element...
    		randomIndex = Math.floor(Math.random() * currentIndex);
    		currentIndex -= 1;

		    // And swap it with the current element.
		    temporaryValue = array[currentIndex];
		    array[currentIndex] = array[randomIndex];
		    array[randomIndex] = temporaryValue;
		  }

	  		return array;
	}


	//code to prevent page from refreshing when submit button is pressed
	// $('.button').click(function(event){
	// 	event.preventDefault();
	// 	document.getElementById('.submit').reset();

	// });
	
	//clicker counter initialization
	$('.tile').click(function(){
		numClicks++;
		$('#thecount').text(numClicks);
	});

	//pics hidden on page load
	$('.pics').hide();

	//code to match the image with the div that is clicked on
	$('.container').on('click', 'div.tile', function(){
		$(this).find('img').show();
		var img = $(this).find('img');

		//conditional for when each player clicks
		//when the first clicked is entered then the image will show up
		if (!clickedOne){
			clickedOne = img.attr('src');
			clickedImg1 = img;
			//when second click is entered then the next imaged will show up
		}else{
			clickedTwo = img.attr('src');
			clickedImg2 = img;
			if(clickedOne === clickedTwo){
				console.log('1',clickedOne)
				console.log('2',clickedTwo)
				console.log('you are right')
				matches++;
				if(clickedOne === clickedTwo){
					$("img").removeClass(".visibility");
				}
				if(matches  === 6 && player1){
					alert('It is player 2s turn');
					$('#displaymessage').text('It is player 2s turn');
					playerOne = numClicks;
					numClicks = 0;
					player1 = false;
					$('#thecount').text(numClicks);
					$('.pics').hide();
					clickedOne = false;
					matches = 0;
					var gameTiles = $('.tile');
					shuffle(url);
					console.log(url);
					gameTiles.each(function(index){
					var img = $(this).find('img');
					img.attr('src', url[index]);
					});
				}else if (!player1 && matches === 6) {
					playerTwo = numClicks;
					if(playerOne > playerTwo){
						$('#displaymessage').text('The winner is player 2');
					}else if (playerTwo > playerOne) {
						$('#displaymessage').text('The winner is player 1');
					}else{ 
						$('#displaymessage').text('The winner is player 2');
					}
				}


			}else{
				//time in between when mouse is clicked and the img is displayed and hidden once again
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

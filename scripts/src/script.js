/**
NAME: Danielle Collins
CLASS: CSCI 344
ASSIGNMENT: Project 2
DUE DATE:   Friday, February 17, 2012
PAGE: Scripts
GOAL:    Using JavaScript, jQuery, Spotter, and Bootstrap create a
client-side web application that tracks some information on twitter relating to a certain search term
and visualizes that information in some way.
*/

function main() {

	var searchTerm;
	var loveCount = 0;
	var hateCount = 0;
	var happyCount = 0;
	var hopeCount = 0;
	var powerCount = 0;
	var trustCount = 0;
	var color;
	
	
	$("#searchButton").click(function(){
		searchTerm = ($("#searchTerm").val());
		var s = new Spotter("twitter.search",
		{q:searchTerm, period:120},
		{buffer:true, bufferTimeout:2500});

		var tweetArray = [];

		s.register(function(tweet){
			if(tweet.text.match(/love|passion|heart/i)) { 	
				color="loveColor";
				loveCount = loveCount + 1;	
				console.log("The word 'love', 'heart' or 'passion' has appeared " + loveCount + " times.");			
				} //end of love match if statement
			else if(tweet.text.match(/hate|death|die/i)){
				color="hateColor";
				hateCount = hateCount + 1;	
				console.log("The word 'hate', 'die' or 'death' has appeared " + hateCount + " times.");
			}
			else if(tweet.text.match(/joy|happy|sun|success|encourage/i)){
				color="happyColor";
				happyCount = happyCount + 1;
				console.log("The word 'happy', 'joy', 'sun', 'success', or 'encourage' has appeared " + happyCount + " times.");
			}
			
			else if(tweet.text.match(/nature|grow|garden|harmony|endure|hope/i)){
				color="hopeColor";
				hopeCount = hopeCount + 1;
				console.log("The word 'nature', 'grow', 'garden' 'harmony', 'endure', or 'hope' has appeared " + hopeCount + " times.");
			}
			
			else if(tweet.text.match(/power|wisdom|dignity|creativ|mystery|magic/i)){
				color="powerColor";
				powerCount = powerCount + 1;
				console.log("The word 'power', 'wisdom', 'dignity', 'creativity', 'mystery', or 'magic' has appeared " + powerCount + " times.");
			}
			
			else if(tweet.text.match(/trust|loyal|faith|heaven/i)){
				color="trustColor";
				trustCount = trustCount + 1;
				console.log("The word 'trust', 'loyal', 'faith', or 'heaven' has appeared " + trustCount + " times.");
			}
			
			else{
				color="plainColor";
			}
			
			var tweetReceived = $("<p class='receivedTweets "+color+"'>"+tweet.text+"</p>");
			tweetReceived.hide();				
			$("#tweets").empty().prepend(tweetReceived);
			tweetReceived.fadeIn();
			tweetArray.push(tweetReceived);
			if (tweetArray.length > 10){
  				var tweetRemoved = tweetArray.shift();
				tweetRemoved.remove();
			}	//end of tweet array length if statement
			


			
		}); //end of s.register function
		
		s.start(); //start the spotter	
		
		$("#stopButton").click(function(){
			s.stop(); //stop the spotter
		});
		
		$("#resetButton").click(function(){
			window.location.reload(); //reload the window
		});
	
	}); //end of search button click function
	
	$("#countButton").click(function(){
		alert(loveCount);
	});
	

		
} //end of main function

$(document).ready(function(){
main();
});



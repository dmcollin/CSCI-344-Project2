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
	var color;
	
	
	$("#searchButton").click(function(){
		searchTerm = ($("#searchTerm").val());
		var s = new Spotter("twitter.search",
		{q:searchTerm, period:120},
		{buffer:true, bufferTimeout:2500});

		var tweetArray = [];

		s.register(function(tweet){
			if(tweet.text.match(/love/i)) { 	
				color="loveColor";
				loveCount = loveCount + 1;	
				console.log("The word 'love' has appeared " + loveCount + " times.");			
				} //end of love match if statement
			else if(tweet.text.match(/hate/i)){
				color="hateColor";
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


